"use client"

import { useEffect } from "react"

function getHeaderOffset() {
  const nav = document.querySelector("nav")
  const h = nav ? (nav as HTMLElement).getBoundingClientRect().height : 70
  return h + 20
}

function scrollToHash(hash: string) {
  const id = hash.replace("#", "")
  const el = document.getElementById(id)
  if (!el) return
  const top = window.scrollY + el.getBoundingClientRect().top - getHeaderOffset()
  window.scrollTo({ top, behavior: "smooth" })
}

export default function SmoothHashScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target) return
      const a = target.closest("a")
      if (!a) return
      const href = a.getAttribute("href") || ""
      if (!href.startsWith("#")) return
      e.preventDefault()
      scrollToHash(href)
      try {
        history.pushState(null, "", href)
      } catch {}
    }
    const onHashChange = () => {
      if (location.hash) scrollToHash(location.hash)
    }
    document.addEventListener("click", onClick)
    window.addEventListener("hashchange", onHashChange)
    if (location.hash) {
      setTimeout(() => scrollToHash(location.hash), 0)
    }
    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener("hashchange", onHashChange)
    }
  }, [])
  return null
}

