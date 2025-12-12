import { Coffee, WechatLogo } from "@phosphor-icons/react"
import { ReactNode } from "react"

export interface SponsorItem {
  name: string
  text: string
  icon: ReactNode
  url: string
  type: "url" | "img"
  mode: "qrcode" | "to"
}

export interface SiteConfig {
  nickname: string
  brandName: string
  github?: string
  email?: string
  icp?: string
  psb?: string
  copyrightOwner?: string
  copyrightStartYear?: number
  sponsors: SponsorItem[]
}

export const siteConfig: SiteConfig = {
  nickname: "灵狼AL01",
  brandName: "灵狼AL01",
  github: "https://github.com/al01cn",
  email: "al01cn@outlook.com",
  icp: "粤ICP备2025454179号",
  psb: "粤公网安备44060502003974号",
  copyrightOwner: "灵狼AL01",
  copyrightStartYear: 2025,
  sponsors: [
    {
      name: "Buy me a Coffee",
      text: "(Hover to scan)",
      icon: <Coffee weight="fill" />,
      url: "/images/sponsor/coffee.jpg",
      type: "url",
      mode: "to"
    },
    {
      name: "微信投喂",
      text: "(Hover to scan)",
      icon: <WechatLogo weight="fill" color="#28C445" />,
      url: "/images/sponsor/wechat.jpg",
      type: "img",
      mode: "qrcode"
    }
  ],
}
