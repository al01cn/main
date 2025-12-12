"use client"

import { useEffect, useRef, useState } from "react"

export type ThemeMode = "manual" | "system" | "time"
export type ThemeValue = "light" | "dark"

type ThemeSetting = {
  mode: ThemeMode
  value: ThemeValue
}

const STORAGE_KEY = "theme-setting"
const LEGACY_KEY = "theme"

function getSystemTheme(): ThemeValue {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getTimeTheme(): ThemeValue {
  const now = new Date()
  const hour = now.getHours()
  return hour >= 7 && hour < 19 ? "light" : "dark"
}

function applyTheme(value: ThemeValue) {
  document.documentElement.setAttribute("data-theme", value)
}

export function useTheme() {
  const [setting, setSetting] = useState<ThemeSetting>({ mode: "manual", value: "light" })
  const mediaRef = useRef<MediaQueryList | null>(null)
  const intervalRef = useRef<number | null>(null)
  const [current, setCurrent] = useState<ThemeValue>("light")

  const setAndApply = (v: ThemeValue) => {
    applyTheme(v)
    setCurrent(v)
  }

  useEffect(() => {
    const legacy = localStorage.getItem(LEGACY_KEY) as ThemeValue | null
    if (legacy) {
      const s: ThemeSetting = { mode: "manual", value: legacy }
      setSetting(s)
      setAndApply(legacy)
      localStorage.removeItem(LEGACY_KEY)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
      return
    }
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const s: ThemeSetting = JSON.parse(raw)
        setSetting(s)
        const v = s.mode === "manual" ? s.value : s.mode === "system" ? getSystemTheme() : getTimeTheme()
        setAndApply(v)
      } catch {
        const v = getSystemTheme()
        const s: ThemeSetting = { mode: "system", value: v }
        setSetting(s)
        setAndApply(v)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
      }
    } else {
      const v = getSystemTheme()
      const s: ThemeSetting = { mode: "system", value: v }
      setSetting(s)
      setAndApply(v)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    }
  }, [])

  useEffect(() => {
    if (setting.mode === "system") {
      const m = window.matchMedia("(prefers-color-scheme: dark)")
      mediaRef.current = m
      const onChange = () => {
        setAndApply(getSystemTheme())
      }
      m.addEventListener("change", onChange)
      onChange()
      return () => m.removeEventListener("change", onChange)
    }
    if (setting.mode === "time") {
      const tick = () => {
        setAndApply(getTimeTheme())
      }
      tick()
      const id = window.setInterval(tick, 5 * 60 * 1000)
      intervalRef.current = id
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }
    }
    return
  }, [setting.mode])

  const setMode = (mode: ThemeMode) => {
    const s: ThemeSetting = { mode, value: setting.value }
    setSetting(s)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    const v = mode === "manual" ? s.value : mode === "system" ? getSystemTheme() : getTimeTheme()
    setAndApply(v)
  }

  const toggleManual = () => {
    const next: ThemeValue = current === "light" ? "dark" : "light"
    const s: ThemeSetting = { mode: "manual", value: next }
    setSetting(s)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s))
    setAndApply(next)
  }

  return {
    mode: setting.mode,
    theme: current,
    setMode,
    toggleManual,
  }
}
