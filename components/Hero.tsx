"use client"

import { useState } from "react"
import { siteConfig } from "../config/site"
import { Code, Sparkle, ArrowRight, GithubLogo, Robot, BatteryCharging, MusicNotes, Coffee, Code as CodeIcon, Lightbulb } from "@phosphor-icons/react"
import Link from "next/link"

export default function Hero() {
  const [active, setActive] = useState<"front" | "back">("front")
  const toggle = () => setActive(v => (v === "front" ? "back" : "front"))

  return (
    <section id="home" className="container mx-auto px-5 py-[110px] md:py-[140px] flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-[80vh]">
      <div className="flex-1 text-center md:text-left gs-reveal">
        <div className="flex flex-wrap gap-2.5 mb-5 justify-center md:justify-start">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(77,183,255,0.1)] text-[var(--color-primary)] text-sm font-semibold"><Code weight="fill" size={16} /> 开发工程师</span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[rgba(77,183,255,0.1)] text-[var(--color-primary)] text-sm font-semibold"><Sparkle weight="fill" size={16} /> 二次元爱好者</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 font-[family-name:var(--font-fredoka)]">
          你好, 我是 <span className="text-[var(--color-primary)] relative inline-block">{siteConfig.nickname}<span suppressHydrationWarning className="inline-block w-[3px] h-[1em] bg-[var(--color-text-main)] animate-[blink_1s_infinite] ml-1 align-middle"></span></span><br />一名喜欢二次元的技术宅
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-8 max-w-[500px] mx-auto md:mx-0">
          热衷于将代码与想象力结合，为用户提供优雅的 Web 应用。喜欢探索提瓦特大陆，也喜欢与星穹铁道一同开拓，还喜欢探索新的技术和创意。
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Link href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-[var(--color-primary)] text-white shadow-lg shadow-[rgba(77,183,255,0.3)] transition-all hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5 hover:shadow-xl">
            查看作品 <ArrowRight weight="bold" size={16} />
          </Link>
          <Link href={siteConfig.github || "#"} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-transparent border border-[var(--border-color)] text-[var(--color-text-main)] transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[rgba(77,183,255,0.05)]">
            <GithubLogo weight="fill" size={16} /> GitHub
          </Link>
        </div>
      </div>

      <div className="flex-1 flex justify-center w-full relative gs-reveal">
        {/* Decoration Circles */}
        <div className="absolute top-[-20px] right-[-20px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] opacity-20 blur-[40px] z-[1] pointer-events-none md:opacity-20" />
        <div className="absolute bottom-[-40px] left-[-40px] w-[200px] h-[200px] rounded-full bg-[var(--color-primary)] opacity-20 blur-[40px] z-[1] pointer-events-none md:opacity-20" />

        <div className="relative w-full max-w-[300px] md:max-w-[320px] min-h-[400px] md:min-h-[420px] perspective-[1000px] group">
          {/* Front Card */}
          <div
            className={`
              absolute inset-0 bg-[var(--color-bg-surface)] rounded-3xl p-5 border border-[var(--border-color)] shadow-xl transition-all duration-500 origin-bottom cursor-pointer
              ${active === "front"
                ? "z-10 translate-y-0 rotate-0 scale-100 opacity-100 grayscale-0"
                : "z-[5] translate-y-0 rotate-6 scale-95 opacity-80 grayscale-[0.4] md:group-hover:translate-x-[40px] md:group-hover:-translate-y-[10px] md:group-hover:rotate-12 md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-95 translate-x-[20px]"}
            `}
            onClick={toggle}
          >
            <div className="w-full h-[200px] md:h-[240px] bg-[#E0F2FE] rounded-xl mb-5 flex items-center justify-center overflow-hidden relative">
              <div className="w-full h-full md:w-full md:h-full rounded-full overflow-hidden">
                <img src="/icon.png" style={{ width: "100%", height: "100%" }} className="w-full h-full object-cover" alt={siteConfig.nickname} />
              </div>
            </div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold mb-2">{siteConfig.nickname}</h3>
              <p className="text-[var(--color-text-muted)] text-sm"></p>
            </div>
            <div className="flex justify-between mt-4 pt-4 border-t border-[var(--border-color)]">
              <div className="text-center">
                <div className="font-bold text-[var(--color-primary)] font-mono">10+</div>
                <div className="text-xs text-[var(--color-text-muted)]">项目</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[var(--color-primary)] font-mono">8k+</div>
                <div className="text-xs text-[var(--color-text-muted)]">提交</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[var(--color-primary)] font-mono">5</div>
                <div className="text-xs text-[var(--color-text-muted)]">等级</div>
              </div>
            </div>
          </div>

          {/* Back Card */}
          <div
            className={`
              absolute inset-0 bg-[var(--color-bg-surface)] rounded-3xl p-5 border border-[var(--border-color)] shadow-xl transition-all duration-500 origin-bottom cursor-pointer flex items-center justify-center
              ${active === "back"
                ? "z-10 translate-y-0 rotate-0 scale-100 opacity-100 grayscale-0"
                : "z-[5] translate-y-0 rotate-6 scale-95 opacity-80 grayscale-[0.4] md:group-hover:translate-x-[40px] md:group-hover:-translate-y-[10px] md:group-hover:rotate-12 md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-95 translate-x-[20px]"}
            `}
            onClick={toggle}
          >
            <div className="w-full bg-[var(--color-bg-subtle)] p-6 rounded-2xl border border-dashed border-[var(--border-color)]">
              <div className="flex justify-between mb-3 pb-3 border-b border-[var(--border-color)]">
                <span className="flex items-center gap-2 font-semibold text-sm"><Lightbulb weight="fill" size={16} /> 喜好</span>
                <span className="text-[var(--color-primary)] font-mono font-bold">音乐、游戏、动漫</span>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b border-[var(--border-color)]">
                <span className="flex items-center gap-2 font-semibold text-sm"><MusicNotes weight="fill" size={16} /> BGM</span>
                <span className="text-[var(--color-primary)] font-mono font-bold">不染 - 毛不易</span>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b border-[var(--border-color)]">
                <span className="flex items-center gap-2 font-semibold text-sm"><Coffee weight="fill" size={16} /> 年龄</span>
                <span className="text-[var(--color-primary)] font-mono font-bold">21岁</span>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b border-[var(--border-color)]">
                <span className="flex items-center gap-2 font-semibold text-sm"><CodeIcon weight="fill" size={16} /> 编辑器</span>
                <span className="text-[var(--color-primary)] font-mono font-bold">VS Code、Trae</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2 font-semibold text-sm"><Robot weight="fill" size={16} /> 擅长</span>
                <span className="text-[var(--color-primary)] font-mono font-bold">Vue 3、React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
