"use client"

import { useEffect } from "react"
import gsap from "gsap"

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".cursor-glow")
    if (!cursor) return
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })
    function onMove(e: MouseEvent) {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: "power2.out" })
    }
    window.addEventListener("mousemove", onMove)
    return () => {
      window.removeEventListener("mousemove", onMove)
    }
  }, [])
  return null
}

