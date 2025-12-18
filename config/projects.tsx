import { Image as ImageIcon, GameController, ChatCenteredText } from "@phosphor-icons/react"

export interface ProjectLink {
  label: string
  url: string
  kind?: "primary" | "outline"
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  img?: string
  icon: React.ReactNode
  links: ProjectLink[]
}

export interface ProjectsConfig {
  title: string
  subtitle: string
  projects: ProjectItem[]
}

export const projectsConfig: ProjectsConfig = {
  title: "次元口袋",
  subtitle: "最近折腾的一些有趣项目",
  projects: [
    {
      title: "Link",
      description:
        "灵狼Link，基于 Next.js 16 + Prisma + SQLite 构建的现代化短链服务。让你的长链接变短！简单、安全、强大的短链生成工具。",
      tags: ["Next.js", "Prisma", "SQLite","短链接"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"github", url:"https://github.com/al01cn/Link", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/Link", kind: "outline"},{label:"gitcode", url:"https://gitcode.com/al01cn/Link", kind: "outline"}],
    },
    {
      title: "UI",
      description:
        "灵狼UI，一个原生 + tailwindcss制作的风格化组件库，提供了一些常用的组件，如按钮、输入框、弹窗等。完全符合现代标准，且有做Vue3、React等框架的兼容版本。",
      tags: ["Web Component", "Tailwindcss", "暂未发布"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [],
    },
    {
      title: "AI HUB",
      description:
        "一个能把云端所有AI提供商集合在一个系统里，支持接入OpenAI、Azure、Google等多个AI提供商的API，统一出OpenAI、Claude格式的API，支持负载均衡、故障转移等、密钥轮巡等功能。",
      tags: ["AI", "OpenAI", "Azure", "Google", "暂未发布"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [],
    },
    {
      title: "AI",
      description:
        "体验过酒馆，但酒馆已经太过于臃肿，所以自己设计了一个更轻量级、且专门为角色扮演制作的版本，只保留了基本的角色扮演相关的功能，如角色创建、对话、场景切换等，同时支持导入酒馆格式的角色卡、预设。",
      tags: ["AI", "角色扮演", "Web应用", "暂未发布"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [],
    }
  ],
}
