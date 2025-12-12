"use client"

import Link from "next/link"
import { siteConfig } from "../config/site"

export default function Footer() {
  const MIIT_URL = "https://beian.miit.gov.cn/"
  const PSB_BASE = "https://beian.mps.gov.cn/#/query/webSearch?code="
  const psbCode = siteConfig.psb
    ? (siteConfig.psb.match(/[0-9A-Za-z]+/g)?.join("") || siteConfig.psb)
    : ""
  return (
    <footer className="bg-[var(--color-bg-surface)] border-t border-[var(--border-color)] py-[60px] pb-[30px] mt-20">
      <div className="container mx-auto px-5 flex flex-col md:flex-row md:justify-between items-center gap-5 text-center md:text-left">
        <div className="flex gap-5 md:order-2">
          {siteConfig.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-11 h-11 rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)] flex items-center justify-center text-xl transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white hover:scale-110 hover:rotate-[10deg] no-underline"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        
        <div className="md:order-1">
          <p className="text-[var(--color-text-muted)] text-[0.9rem] mb-1">
            Designed & Built with <span suppressHydrationWarning className="text-[#FF6B6B] inline-block animate-[pulse_1.5s_infinite]">❤</span> by <strong>{siteConfig.nickname}</strong>
            <br />
            © {new Date().getFullYear()} {siteConfig.copyrightOwner ?? siteConfig.nickname}. All rights reserved.
          </p>
          {(siteConfig.icp || siteConfig.psb) && (
            <p className="text-[var(--color-text-muted)] text-[0.85rem]">
              {siteConfig.icp && (
                <>
                  <Link className="text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" href={MIIT_URL} target="_blank" rel="noopener noreferrer">
                    {siteConfig.icp}
                  </Link>
                </>
              )}
              {siteConfig.icp && siteConfig.psb ? " · " : ""}
              {siteConfig.psb && (
                <>
                  <Link className="text-[var(--color-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-primary)]" href={`${PSB_BASE}${encodeURIComponent(psbCode)}`} target="_blank" rel="noopener noreferrer">
                    {siteConfig.psb}
                 </Link>
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
