"use client"

import { Wrench } from "@phosphor-icons/react"
import { skillsConfig } from "../config/skills"
import SectionFallback from "./SectionFallback"

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-[80px] container mx-auto px-5">
      <div className="text-center mb-[60px] gs-anim">
        <h2 className="text-3xl md:text-4xl mb-2.5 inline-flex items-center gap-2.5 justify-center font-[family-name:var(--font-fredoka)]">
          <Wrench weight="duotone" /> {skillsConfig.title}
        </h2>
        <p className="text-[var(--color-text-muted)] px-2.5">{skillsConfig.subtitle}</p>
      </div>
      {(!skillsConfig || !Array.isArray(skillsConfig.items)) && (
        <SectionFallback title="获取失败" description="请稍后重试或刷新页面" kind="error" />
      )}
      {skillsConfig && Array.isArray(skillsConfig.items) && skillsConfig.items.length === 0 && (
        <SectionFallback title="暂无内容" description="尚未配置任何技能项" />
      )}
      {skillsConfig && Array.isArray(skillsConfig.items) && skillsConfig.items.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,160px)] gap-5 justify-center">
          {skillsConfig.items.map((item) => (
            <div
              key={item.name}
              className="bg-[var(--color-bg-surface)] border border-[var(--border-color)] rounded-xl p-5 flex flex-col items-center gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)] hover:shadow-sm group gs-anim-item"
            >
              <div className="text-[2.5rem] text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[var(--color-primary)] group-hover:scale-110">
                {item.icon}
              </div>
              <span className="font-semibold text-[0.9rem] text-center">{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
