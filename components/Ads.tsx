"use client"

import { Megaphone, ArrowRight } from "@phosphor-icons/react"
import Image from "next/image"
import { adsConfig } from "../config/ads"
import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
import Link from "next/link"

export default function Ads() {
  const [errors, setErrors] = useState<Record<number, boolean>>({})

  const handleError = (index: number) => {
    setErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="ads" className="py-20 md:py-[80px] container mx-auto px-5">
      <div className="text-center mb-[60px] gs-anim">
        <h2 className="text-3xl md:text-4xl mb-2.5 inline-flex items-center gap-2.5 justify-center font-[family-name:var(--font-fredoka)]">
          <Megaphone weight="duotone" /> 特别推荐
        </h2>
        <p className="text-[var(--color-text-muted)] px-2.5">看看这些有趣的去处</p>
      </div>
      <div className="sponsor-grid">
        {adsConfig.map((item, index) => (
          <div 
            key={index} 
            className="w-[240px] h-[320px] rounded-[var(--radius-lg)] bg-[var(--color-bg-surface)] border border-[var(--border-color)] shadow-[var(--shadow-sm)] overflow-hidden gs-anim-item hover:shadow-md transition-shadow duration-300"
          >
            {item.mode === "to" ? (
              <Link href={item.url} target="_blank" className="flex flex-col items-center justify-center h-full w-full p-4 text-center group">
                <div className="text-[4rem] text-[var(--color-secondary)] mb-4 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                {item.text && (
                  <p className="text-[var(--color-text-muted)] text-sm mb-4">{item.text}</p>
                )}
                <div className="mt-auto text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                   访问 <ArrowRight />
                </div>
              </Link>
            ) : (
              <div className="flex flex-col items-center justify-center h-full w-full p-4 text-center">
                <div className="text-[2.5rem] text-[var(--color-secondary)] mb-4">
                  {item.icon}
                </div>
                
                {item.type === "url" ? (
                  <div className="w-[150px] h-[150px] relative mx-auto bg-white p-2 rounded-lg flex items-center justify-center shadow-sm">
                    <QRCodeCanvas value={item.url} size={134} />
                  </div>
                ) : item.type === "img" && !errors[index] ? (
                  <div className="w-[150px] h-[150px] relative mx-auto bg-white p-2 rounded-lg flex items-center justify-center shadow-sm">
                    <Image
                      src={item.url}
                      alt={`${item.name} QR`}
                      fill
                      className="object-contain p-2"
                      onError={() => handleError(index)}
                    />
                  </div>
                ) : (
                  <div className="w-[150px] h-[150px] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                    {errors[index] ? "加载失败" : "暂未配置"}
                  </div>
                )}
                
                <h3 className="font-bold text-lg mt-4">{item.name}</h3>
                {item.text && (
                  <p className="text-[var(--color-text-muted)] text-sm mt-1">{item.text}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
