"use client"

import type { ReactNode } from "react"
import { WarningCircle, XCircle } from "@phosphor-icons/react"

type SectionFallbackProps = {
  title: string
  description?: string
  icon?: ReactNode
  kind?: "empty" | "error"
}

export default function SectionFallback({
  title,
  description,
  icon,
  kind = "empty",
}: SectionFallbackProps) {
  const Icon = kind === "error" ? XCircle : WarningCircle
  return (
    <div className="w-full flex flex-col items-center justify-center rounded-2xl border border-[var(--border-color)] bg-[var(--color-bg-surface)] px-6 py-16 text-center gs-anim-item">
      <div className="text-[2.75rem] mb-3 text-[var(--color-text-muted)]">
        {icon ?? <Icon weight="duotone" />}
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description ? (
        <p className="text-[var(--color-text-muted)]">{description}</p>
      ) : null}
    </div>
  )
}

