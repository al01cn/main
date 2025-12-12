import { Coffee, WechatLogo, TwitterLogo, GithubLogo, DiscordLogo, EnvelopeSimple } from "@phosphor-icons/react"
import { ReactNode } from "react"
import { Icon } from "@iconify/react";

export interface SponsorItem {
  name: string
  text?: string
  icon: ReactNode
  url: string
  type: "url" | "img"
  mode: "qrcode" | "to"
}

export interface SocialItem {
  name: string
  icon: ReactNode
  url: string
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
  navItems: { id: string; label: string }[]
  socials: SocialItem[]
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
  navItems: [
    { id: "home", label: "主页" },
    { id: "skills", label: "装备库" },
    { id: "projects", label: "次元口袋" },
    { id: "partners", label: "合作伙伴" },
    { id: "sponsor", label: "发电站" },
  ],
  socials: [
    {
      name: "Bilibili",
      icon: <Icon icon="ri:bilibili-line" className="font-bold w-[1.2rem] h-[1.2rem]" />,
      url: "https://space.bilibili.com/415963320"
    },
    {
      name: "Gitee",
      icon: <Icon icon="simple-icons:gitee" className="font-bold w-[1.2rem] h-[1.2rem]" />,
      url: "https://gitee.com/al01"
    },
    {
      name: "GitHub",
      icon: <GithubLogo weight="fill" className="w-[1.2rem] h-[1.2rem]" />,
      url: "https://github.com/al01cn"
    },
    {
      name: "Email",
      icon: <EnvelopeSimple weight="fill" className="w-[1.2rem] h-[1.2rem]" />,
      url: "mailto:hz@al01.cn"
    }
  ],
  sponsors: [
    {
      name: "微信投喂",
      text: "(Hover to scan)",
      icon: <WechatLogo weight="fill" color="#28C445" />,
      url: "/images/sponsor/wx.png",
      type: "img",
      mode: "qrcode"
    },
    {
      name: "支付宝投喂",
      text: "(Hover to scan)",
      icon: <Icon icon="ri:alipay-fill" color="#0096FF" className="font-bold w-[1.2rem] h-[1.2rem]" />,
      url: "/images/sponsor/zfb.png",
      type: "img",
      mode: "qrcode"
    },
    {
      name: "爱发电",
      icon: <Icon icon="simple-icons:afdian" color="#9575d7" className="font-bold w-[1.2rem] h-[1.2rem]" />,
      url: "https://afdian.com/a/al01cn",
      type: "url",
      mode: "to"
    }
  ],
}
