"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function useGsapHomeAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from(".navbar", { y: -100, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".gs-reveal", { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.5")

      gsap.utils.toArray(".gs-anim").forEach(el => {
        gsap.from(el as Element, {
          scrollTrigger: {
            trigger: el as Element,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
        })
      })

      gsap.utils.toArray(".skills-grid, .projects-grid, .sponsor-grid").forEach(container => {
        const items = (container as Element).querySelectorAll(".gs-anim-item")
        if (items.length > 0) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: container as Element,
              start: "top 85%" ,
              toggleActions: "play none none none",
              once: true,
              invalidateOnRefresh: true,
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            immediateRender: false,
          })
        }
      })

      ScrollTrigger.refresh()
    })
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])
}
