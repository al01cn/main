import { ReactNode } from "react"
import { Icon } from "@iconify/react"

export interface AdItem {
  name: string
  text?: string // 描述文本
  icon: ReactNode
  url: string
  type: "url" | "img"
  mode: "qrcode" | "to"
}

export const adsConfig: AdItem[] = [
  // 示例配置，请根据实际情况修改
  {
    name: "雨云",
    text: "服务器厂商，提供高可用、高安全、高性能的服务器服务。",
    icon: <Icon icon="ri:links-fill" color="#4285F4" className="font-bold w-[1.2rem] h-[1.2rem]" />,
    url: "https://url.al01.cn/ry",
    type: "url",
    mode: "to"
  },
  {
    name: "123pan",
    text: "云盘服务，提供高可用、高安全、高性能的云盘服务。",
    icon: <Icon icon="ri:links-fill" color="#4285F4" className="font-bold w-[1.2rem] h-[1.2rem]" />,
    url: "https://url.al01.cn/123pan",
    type: "url",
    mode: "to"
  },
  {
    name: "阿里云ESA",
    text: "边缘加速服务，限时活动",
    icon: <Icon icon="ri:links-fill" color="#4285F4" className="font-bold w-[1.2rem] h-[1.2rem]" />,
    url: "https://url.al01.cn/esa",
    type: "url",
    mode: "to"
  },
  {
    name: "Flowith",
    text: "flowith 旨在提供一种超越传统对话的与人工智能互动的新方式。",
    icon: <Icon icon="ri:links-fill" color="#4285F4" className="font-bold w-[1.2rem] h-[1.2rem]" />,
    url: "https://url.al01.cn/flowith",
    type: "url",
    mode: "to"
  },
  {
    name: "Qoder",
    text: "面向真实软件的智能体编程平台。",
    icon: <Icon icon="ri:links-fill" color="#4285F4" className="font-bold w-[1.2rem] h-[1.2rem]" />,
    url: "https://url.al01.cn/qoder",
    type: "url",
    mode: "to"
  }
]
