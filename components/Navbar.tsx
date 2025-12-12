"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "../config/site"
import { Sun, Moon, List, X, Hand, Desktop, Clock } from "@phosphor-icons/react"
import TextLogoIcon from "./TextLogoIcon"
import TextLogo2Icon from "./TextLogo2Icon"
import { useTheme } from "../hooks/useTheme"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const drawerRef = useRef<HTMLDialogElement | null>(null)
  const [brandVariant, setBrandVariant] = useState<"text" | "text2">("text")
  const { mode, theme, setMode, toggleManual } = useTheme()

  useEffect(() => {
    const r = Math.random()
    setBrandVariant(r < 0.12 ? "text2" : "text")
  }, [])

  const handleThemeButton = () => {
    toggleManual()
  }
  
  const cycleMode = () => {
    const order = ["manual", "system", "time"] as const
    const idx = order.indexOf(mode as any)
    const next = order[(idx + 1) % order.length]
    setMode(next as any)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""
      sections.forEach(section => {
        const top = section.offsetTop
        if (window.scrollY >= top - 150) current = section.id
      })
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const { navItems } = siteConfig

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  useEffect(() => {
    const dlg = drawerRef.current
    if (!dlg) return
    if (typeof (dlg as any).showModal !== "function") {
      import("dialog-polyfill").then((mod) => {
        const dp: any = (mod as any).default ?? mod
        dp.registerDialog(dlg)
      })
    }
  }, [])

  useEffect(() => {
    const dlg = drawerRef.current
    if (!dlg) return
    const onCancel = (e: Event) => {
      e.preventDefault()
      setMenuOpen(false)
    }
    dlg.addEventListener("cancel", onCancel)
    return () => dlg.removeEventListener("cancel", onCancel)
  }, [])

  useEffect(() => {
    const dlg = drawerRef.current
    if (!dlg) return
    if (menuOpen) {
      try {
        dlg.showModal()
        requestAnimationFrame(() => {
          dlg.setAttribute("data-state", "open")
        })
      } catch {
      }
    } else {
      dlg.removeAttribute("data-state")
      if (dlg.open) {
        const onEnd = () => {
          dlg.close()
        }
        dlg.addEventListener("transitionend", onEnd, { once: true })
      }
    }
  }, [menuOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)] z-[100] transition-all duration-300">
      <div className="container mx-auto px-5 flex justify-between items-center h-full">
        <a href="#" className="flex items-center gap-2 text-2xl font-semibold text-[var(--color-primary)] no-underline">
          {brandVariant === "text" ? (
            <TextLogoIcon className="h-10 w-auto" aria-label={siteConfig.brandName} />
          ) : (
            <TextLogo2Icon className="h-10 w-auto" aria-label={siteConfig.brandName} />
          )}
        </a>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:gap-8 md:items-center">
            {navItems.map((item) => {
              const active = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-[var(--color-text-muted)] font-medium relative transition-colors duration-200 hover:text-[var(--color-primary)] ${active ? "text-[var(--color-primary)]" : ""} group`}
                >
                  {item.label}
                  <span className={`absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-full h-[2px] bg-[var(--color-primary)] rounded-full transform scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 ${active ? "scale-x-100" : ""}`}></span>
                </a>
              )
            })}
          </div>

          <dialog
            ref={drawerRef}
            className="drawer md:hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) setMenuOpen(false)
            }}
          >
            <div className="h-full pt-[70px] px-4 flex flex-col gap-2 overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-3 rounded-lg text-lg font-medium text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-primary)] ${activeSection === item.id ? "text-[var(--color-primary)]" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </dialog>

          <button 
            onClick={handleThemeButton}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--color-bg-subtle)] text-[var(--color-text-main)] transition-all duration-200 hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer"
            aria-label="切换主题"
          >
            {theme === "dark" ? <Moon weight="fill" color="#FDB813" /> : <Sun weight="fill" color="#F97316" />}
          </button>
          
          <button
            onClick={cycleMode}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--color-bg-subtle)] text-[var(--color-text-main)] transition-all duration-200 hover:scale-105 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] cursor-pointer"
            aria-label={mode === "manual" ? "手动模式" : mode === "system" ? "跟随浏览器模式" : "跟随时间模式"}
            title={mode === "manual" ? "手动模式" : mode === "system" ? "跟随浏览器模式" : "跟随时间模式"}
          >
            {mode === "manual" ? <Hand weight="bold" /> : mode === "system" ? <Desktop weight="bold" /> : <Clock weight="bold" />}
          </button>
          
          <button 
            className="block md:hidden text-[var(--color-text-main)] text-2xl p-1 z-[102] cursor-pointer bg-transparent border-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            {menuOpen ? <X weight="bold" /> : <List weight="bold" />}
          </button>
        </div>
      </div>
    </nav>
  )
}
