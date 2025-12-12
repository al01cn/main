"use client"

import { Lightning, ArrowRight } from "@phosphor-icons/react"
import Image from "next/image"
import { siteConfig } from "../config/site"
import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"
import Link from "next/link"

export default function Sponsor() {
  const [errors, setErrors] = useState<Record<number, boolean>>({})

  const handleError = (index: number) => {
    setErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="energy" className="py-20 md:py-[80px] container mx-auto px-5">
      <div className="text-center mb-[60px] gs-anim">
        <h2 className="text-3xl md:text-4xl mb-2.5 inline-flex items-center gap-2.5 justify-center font-[family-name:var(--font-fredoka)]">
          <Lightning weight="duotone" /> 发电站
        </h2>
        <p className="text-[var(--color-text-muted)] px-2.5">投喂狼狼，加速开发速度</p>
        <p className="text-[var(--color-text-muted)] px-2.5 text-[12px]">但请尽自己的能力，就算不投喂，狼狼也会继续努力！</p>
      </div>
      <div className="energy-grid">
        {siteConfig.sponsors.map((item, index) => (
          <div key={index} className={`energy-card gs-anim-item ${item.mode === "to" ? "no-flip" : ""}`}>
            {item.mode === "to" ? (
              <Link href={item.url} target="_blank" className="energy-inner block h-full w-full">
                <div className="energy-front flex flex-col items-center justify-center h-full">
                  {item.icon}
                  <h3>{item.name}</h3>
                  <p className="text-[var(--color-text-muted)] text-[0.8rem] mt-2.5 flex flex-col items-center gap-1">
                    {item.text} <ArrowRight />
                  </p>
                </div>
              </Link>
            ) : (
              <div className="energy-inner">
                <div className="energy-front">
                  {item.icon}
                  <h3>{item.name}</h3>
                  <p className="text-[var(--color-text-muted)] text-[0.8rem] mt-2.5 hidden md:block">{item.text}</p>
                </div>
                <div className="energy-back">
                  {item.type === "url" ? (
                    <div className="w-[150px] h-[150px] relative mx-auto bg-white p-2 rounded-lg flex items-center justify-center">
                      <QRCodeCanvas value={item.url} size={134} />
                    </div>
                  ) : item.type === "img" && !errors[index] ? (
                    <div className="w-[150px] h-[150px] relative mx-auto bg-white p-2 rounded-lg flex items-center justify-center">
                      <Image
                        src={item.url}
                        alt={`${item.name} QR`}
                        fill
                        className="object-contain p-2"
                        onError={() => handleError(index)}
                      />
                    </div>
                  ) : (
                    <div className="qr-placeholder text-black text-sm">{errors[index] ? "加载失败" : "暂未配置"}</div>
                  )}
                  <p>感谢支持！</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
