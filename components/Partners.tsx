
"use client"

import { useState, useEffect } from "react"
import { Handshake } from "@phosphor-icons/react"
import { partnersConfig, Partner } from "../config/partners"
import Image from "next/image"

export default function Partners() {
  const { title, subtitle, partners } = partnersConfig
  const isMarquee = partners.length > 3
  const [direction, setDirection] = useState<"left" | "right">("left")
  
  // Random direction on mount
  useEffect(() => {
    setDirection(Math.random() > 0.5 ? "left" : "right")
  }, [])

  return (
    <section id="partners" className="py-20 md:py-[80px] container mx-auto px-5 overflow-hidden">
      <div className="text-center mb-[60px] gs-anim">
        <h2 className="text-3xl md:text-4xl mb-2.5 inline-flex items-center gap-2.5 justify-center font-[family-name:var(--font-fredoka)]">
          <Handshake weight="duotone" /> {title}
        </h2>
        <p className="text-[var(--color-text-muted)] px-2.5">{subtitle}</p>
      </div>

      {isMarquee ? (
        <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
           <div className={`flex gap-8 w-max items-center ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} pause-on-hover py-4`}>
            {/* Duplicate list 4 times to ensure smooth scrolling and compatibility with -50% animation */}
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-center">
           {partners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} />
            ))}
        </div>
      )}
    </section>
  )
}

function PartnerCard({ partner }: { partner: Partner }) {
    const isCompany = partner.type === 'company';

    if (isCompany) {
        return (
            <a 
                href={partner.url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 transition-all min-w-[200px] w-[200px] h-[100px] group"
            >
                <div className="relative w-full h-full transition-all opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 group-hover:scale-110">
                    <Image 
                        src={partner.avatar} 
                        alt={partner.name} 
                        fill 
                        className="object-contain"
                        unoptimized
                    />
                </div>
            </a>
        );
    }

    return (
        <a 
            href={partner.url || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 p-6 transition-all min-w-[180px] w-[180px] h-[160px] group"
        >
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--border-color)] group-hover:border-[var(--color-primary)] transition-colors bg-white group-hover:scale-110">
                <Image 
                    src={partner.avatar} 
                    alt={partner.name} 
                    fill 
                    className="object-cover"
                    unoptimized
                />
            </div>
            <span className="font-medium text-[var(--color-text-main)] text-center truncate w-full group-hover:text-[var(--color-primary)] transition-colors">{partner.name}</span>
        </a>
    )
}
