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
      title: "Bangumi Tracker",
      description:
        "一个自动追踪新番更新进度的 Web App，对接了 Bangumi API，界面采用了 Material You 风格。",
      tags: ["Vue3", "Anime"],
      img: "/text_logo.png",
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [
        { label: "演示", url: "#", kind: "primary" },
        { label: "源码", url: "#", kind: "outline" },
      ],
    },
    {
      title: "Cyber City 3D",
      description:
        "浏览器端的低多边形 3D 城市漫游体验。包含完整的昼夜循环和交互式建筑。",
      tags: ["React", "Three.js"],
      icon: <GameController weight="duotone" size={64} color="#CBD5E1" />,
      links: [{ label: "进入世界", url: "#", kind: "primary" }],
    },
    {
      title: "MoeBot Assistant",
      description:
        "基于 LLM 的桌面助手，性格设定为毒舌傲娇系，可以辅助管理日程和代码 Review。",
      tags: ["AI", "Python"],
      icon: <ChatCenteredText weight="duotone" size={64} color="#CBD5E1" />,
      links: [{ label: "查看文档", url: "#", kind: "outline" }],
    },
        {
      title: "MoeBot Assistant",
      description:
        "基于 LLM 的桌面助手，性格设定为毒舌傲娇系，可以辅助管理日程和代码 Review。",
      tags: ["AI", "Python"],
      icon: <ChatCenteredText weight="duotone" size={64} color="#CBD5E1" />,
      links: [{ label: "查看文档", url: "#", kind: "outline" }],
    },
        {
      title: "MoeBot Assistant",
      description:
        "基于 LLM 的桌面助手，性格设定为毒舌傲娇系，可以辅助管理日程和代码 Review。",
      tags: ["AI", "Python"],
      icon: <ChatCenteredText weight="duotone" size={64} color="#CBD5E1" />,
      links: [{ label: "查看文档", url: "#", kind: "outline" }],
    },
        {
      title: "MoeBot Assistant",
      description:
        "基于 LLM 的桌面助手，性格设定为毒舌傲娇系，可以辅助管理日程和代码 Review。",
      tags: ["AI", "Python"],
      icon: <ChatCenteredText weight="duotone" size={64} color="#CBD5E1" />,
      links: [{ label: "查看文档", url: "#", kind: "outline" }],
    },
  ],
}
