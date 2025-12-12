"use client"

import { useEffect, useState, useCallback } from "react"
import { FolderStar, CaretLeft, CaretRight } from "@phosphor-icons/react"
import useEmblaCarousel from "embla-carousel-react"
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures"
import { projectsConfig } from "../config/projects"
import SectionFallback from "./SectionFallback"

export default function Projects() {
  function ProjectMedia({ img, icon, title }: { img?: string; icon?: React.ReactNode; title: string }) {
    const [failed, setFailed] = useState(false)
    if (img && !failed) {
      return (
        <img
          src={img}
          alt={`${title} 封面`}
          className="max-w-full max-h-full object-contain object-center block mx-auto"
          onError={() => setFailed(true)}
        />
      )
    }
    if (icon) return <>{icon}</>
    return <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)] text-sm">未设置封面</div>
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false, // 设为 false 以确保有吸附效果，但 Embla 的吸附比原生 CSS 更丝滑
      loop: false,
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis: "x",
      }),
    ]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // 监听按钮状态（可选，如果需要置灰按钮）
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback((api: any) => {
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="projects" className="py-20 md:py-[80px] container mx-auto px-5">
      <div className="text-center mb-[60px] gs-anim">
        <h2 className="text-3xl md:text-4xl mb-2.5 inline-flex items-center gap-2.5 justify-center font-[family-name:var(--font-fredoka)]">
          <FolderStar weight="duotone" /> {projectsConfig.title}
        </h2>
        <p className="text-[var(--color-text-muted)] px-2.5">{projectsConfig.subtitle}</p>
      </div>
      {(!projectsConfig || !Array.isArray(projectsConfig.projects)) && (
        <SectionFallback title="获取失败" description="请稍后重试或刷新页面" kind="error" />
      )}
      {projectsConfig && Array.isArray(projectsConfig.projects) && projectsConfig.projects.length === 0 && (
        <SectionFallback title="暂无内容" description="尚未配置任何项目" />
      )}
      {projectsConfig && Array.isArray(projectsConfig.projects) && projectsConfig.projects.length > 0 && (
        <div className="relative group/carousel">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 touch-pan-y">
              {projectsConfig.projects.map((project, idx) => (
                <div key={`${project.title}-${idx}`} className="flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0">
                  <div className="bg-[var(--color-bg-surface)] rounded-2xl overflow-hidden border border-[var(--border-color)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative group gs-anim-item h-full">
                    <div suppressHydrationWarning className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(var(--shine-angle),transparent_20%,var(--shine-color)_50%,transparent_80%)] -translate-x-[150%] transition-transform duration-600 pointer-events-none group-hover:translate-x-[150%]"></div>
                    <div className="h-[180px] bg-[#E2E8F0] relative flex items-center justify-center overflow-hidden">
                      <ProjectMedia img={project.img} icon={project.icon} title={project.title} />
                    </div>
                    <div className="p-6">
                      {Array.isArray(project.tags) && project.tags.length > 0 && (
                        <div className="flex gap-2 mb-3 flex-wrap">
                          {project.tags.map((t) => (
                            <span key={t} className="text-xs px-2 py-1 rounded-md bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] font-mono">{t}</span>
                          ))}
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-[var(--color-text-muted)] text-[0.95rem] mb-5">{project.description}</p>
                      {Array.isArray(project.links) && project.links.length > 0 && (
                        <div className="flex gap-2.5 flex-wrap">
                          {project.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              className={`
                                inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg font-semibold text-sm transition-all no-underline border
                                ${link.kind === "primary" 
                                  ? "bg-[var(--color-primary)] text-white shadow-md shadow-[rgba(77,183,255,0.3)] border-transparent hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5 hover:shadow-lg" 
                                  : "bg-transparent border-[var(--border-color)] text-[var(--color-text-main)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[rgba(77,183,255,0.05)]"}
                              `}
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {projectsConfig.projects.length > 1 && (
            <>
              <button
                type="button"
                aria-label="上一项"
                disabled={!canScrollPrev}
                onClick={scrollPrev}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg-surface)]/80 backdrop-blur px-3.5 py-2 rounded-full border border-[var(--border-color)] text-[var(--color-text-main)] transition-all
                  ${!canScrollPrev ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-white hover:bg-[var(--color-primary)] hover:border-transparent'}
                `}
              >
                <CaretLeft size={20} weight="bold" />
              </button>
              <button
                type="button"
                aria-label="下一项"
                disabled={!canScrollNext}
                onClick={scrollNext}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-bg-surface)]/80 backdrop-blur px-3.5 py-2 rounded-full border border-[var(--border-color)] text-[var(--color-text-main)] transition-all
                  ${!canScrollNext ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:text-white hover:bg-[var(--color-primary)] hover:border-transparent'}
                `}
              >
                <CaretRight size={20} weight="bold" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  )
}
