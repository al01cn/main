"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldWarning, X } from "@phosphor-icons/react"
import { useAdblockDetector } from "../hooks/useAdblockDetector"

export default function AdblockBanner() {
  const detected = useAdblockDetector()
  const [dismissed, setDismissed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem("adblock-banner-dismissed") === "1"
    } catch {
      return false
    }
  })
  const ref = useRef<HTMLDivElement | null>(null)
  const visible = detected && !dismissed

  useEffect(() => {
    const h = visible && ref.current ? ref.current.offsetHeight : 0
    try {
      document.documentElement.style.setProperty("--banner-offset", `${h}px`)
    } catch {}
    return () => {
      try {
        document.documentElement.style.setProperty("--banner-offset", "0px")
      } catch {}
    }
  }, [visible])

  const onClose = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem("adblock-banner-dismissed", "1")
    } catch {}
    try {
      document.documentElement.style.setProperty("--banner-offset", "0px")
    } catch {}
  }

  if (!visible) return null

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 z-[200] bg-amber-50 border-b border-amber-200 text-amber-900"
    >
      <div className="container mx-auto px-5 py-2 text-sm flex items-center justify-center gap-2">
        <ShieldWarning weight="duotone" className="inline-block" />
        <span>
          检测到广告拦截，可能导致「发电站」或「特别推荐」内容无法正常显示。
          请将本站加入白名单或关闭广告拦截器，以完整展示全部内容。
        </span>
        <button
          aria-label="关闭提示"
          onClick={onClose}
          className="ml-3 p-1 rounded hover:bg-amber-100 text-amber-900"
        >
          <X weight="bold" />
        </button>
      </div>
    </div>
  )
}

