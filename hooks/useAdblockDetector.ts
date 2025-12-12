"use client"

import { useEffect, useState } from "react"

export function useAdblockDetector() {
  const [detected, setDetected] = useState(false)

  useEffect(() => {
    let cancelled = false
    let scheduled = false
    let lastRun = 0

    const runCheck = () => {
      scheduled = false
      lastRun = Date.now()
      let result = false
      try {
        const bait = document.createElement("div")
        bait.className = "ads ad-banner advertisement sponsor adcontainer"
        bait.style.cssText = "width:1px;height:1px;position:absolute;left:-10000px;top:-10000px;"
        document.body.appendChild(bait)
        const style = window.getComputedStyle(bait)
        if (style.display === "none" || style.visibility === "hidden") result = true
        if (bait.offsetParent === null || bait.offsetHeight === 0 || bait.offsetWidth === 0) result = true
        bait.remove()
      } catch {}

      try {
        const energy = document.getElementById("energy")
        const explore = document.getElementById("explore")
        const energyCards = document.querySelectorAll("#energy .energy-card")
        const exploreCards = document.querySelectorAll("#explore .discover-grid > div")
        const energyBlocked = !!energy && (energyCards.length === 0 || energy.offsetHeight === 0)
        const exploreBlocked = !!explore && (exploreCards.length === 0 || explore.offsetHeight === 0)
        result = result || energyBlocked || exploreBlocked
      } catch {}

      if (!cancelled) setDetected(result)
    }

    const scheduleCheck = () => {
      if (scheduled) return
      scheduled = true
      const now = Date.now()
      const delay = Math.max(0, 250 - (now - lastRun))
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (!cancelled) runCheck()
        }, delay)
      })
    }

    const t = setTimeout(runCheck, 1200)
    const mo = new MutationObserver(() => scheduleCheck())
    mo.observe(document.body, { childList: true, subtree: true })
    const stop = setTimeout(() => {
      mo.disconnect()
    }, 8000)

    return () => {
      cancelled = true
      clearTimeout(t)
      clearTimeout(stop)
      mo.disconnect()
    }
  }, [])

  return detected
}
