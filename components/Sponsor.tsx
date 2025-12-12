"use client"

import { Lightning, Coffee, WechatLogo } from "@phosphor-icons/react"

export default function Sponsor() {
  return (
    <section id="sponsor" className="py-20 md:py-[80px] container mx-auto px-5">
      <div className="text-center mb-[60px] gs-anim">
        <h2 className="text-3xl md:text-4xl mb-2.5 inline-flex items-center gap-2.5 justify-center font-[family-name:var(--font-fredoka)]">
          <Lightning weight="duotone" /> 发电站
        </h2>
        <p className="text-[var(--color-text-muted)] px-2.5">投喂狼狼，加速开发速度</p>
        <p className="text-[var(--color-text-muted)] px-2.5 text-[12px]">但请尽自己的能力，就算不投喂，狼狼也会继续努力！</p>
      </div>
      <div className="sponsor-grid">
        <div className="sponsor-card gs-anim-item">
          <div className="sponsor-inner">
            <div className="sponsor-front">
              <Coffee weight="fill" />
              <h3>Buy me a Coffee</h3>
              <p className="text-[var(--color-text-muted)] text-[0.8rem] mt-2.5 hidden md:block">(Hover to scan)</p>
            </div>
            <div className="sponsor-back">
              <div className="qr-placeholder">QR Code</div>
              <p>感谢支持！</p>
            </div>
          </div>
        </div>
        <div className="sponsor-card gs-anim-item">
          <div className="sponsor-inner">
            <div className="sponsor-front">
              <WechatLogo weight="fill" color="#28C445" />
              <h3>微信投喂</h3>
              <p className="text-[var(--color-text-muted)] text-[0.8rem] mt-2.5 hidden md:block">(Hover to scan)</p>
            </div>
            <div className="sponsor-back">
              <div className="qr-placeholder">WeChat QR</div>
              <p>老板大气！</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
