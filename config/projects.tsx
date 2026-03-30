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
  subtitle: "最近正在折腾或已经公布的一些有趣项目",
  projects: [
    {
      title: "SillyTavern Launcher GUI Desktop",
      description:
        "SillyTavern Launcher GUI 是一个专为 SillyTavern 设计的跨平台桌面客户端，基于 Tauri v2 + Vue 3 + Rust 构建。它提供了直观、现代的图形界面，让用户无需命令行即可完整管理 SillyTavern 的安装、启动、配置和扩展。",
      tags: ["SillyTavern", "酒馆", "傻酒馆", "启动器", "SillyTavern Launcher", "SillyTavern Launcher GUI", "Desktop"],
      img: "https://ghfast.top/https://raw.githubusercontent.com/al01cn/sillyTavern-launcher/GUI/src/assets/images/banner.png",
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"官网", url:"https://st.al01.cn/", kind: "primary"},{label:"github", url:"https://github.com/al01cn/sillyTavern-launcher", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/sillyTavern-launcher", kind: "outline"}],
    },
    {
      title: "SillyTavern Launcher GUI Mobile",
      description:
        "SillyTavern Launcher Mobile 是一款专为 Android 打造的集成启动器。它通过在应用内嵌入 Node.js 运行时和 SillyTavern 核心，让您能够直接在手机上本地运行完整的酒馆界面，无需依赖外部服务器或配置复杂的 Termux 环境。",
      tags: ["SillyTavern", "酒馆", "傻酒馆", "启动器", "SillyTavern Launcher", "SillyTavern Launcher GUI", "Mobile"],
      img: "https://ghfast.top/https://raw.githubusercontent.com/al01cn/sillyTavern-launcher/GUI/src/assets/images/banner.png",
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"官网", url:"https://st.al01.cn/", kind: "primary"},{label:"github", url:"https://github.com/al01cn/sillytavern-launcher-mobile", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/sillytavern-launcher-mobile", kind: "outline"}],
    },
    {
      title: "Link",
      description:
        "灵狼Link，基于 Next.js 16 + Prisma + SQLite 构建的现代化短链服务。让你的长链接变短！简单、安全、强大的短链生成工具。",
      tags: ["Next.js", "Prisma", "SQLite","短链接"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"github", url:"https://github.com/al01cn/Link", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/Link", kind: "outline"},{label:"gitcode", url:"https://gitcode.com/al01cn/Link", kind: "outline"}],
    },
    {
      title: "MCSD",
      description:
        "一个基于浏览器端 FFmpeg（WebAssembly）的 Minecraft 音频资源包生成器：在本地把音频转成 OGG（Vorbis），生成 sounds.json、资源包元数据并打包下载，无需把音频上传到服务器。",
      tags: ["音频资源包生成器", "FFmpeg", "WebAssembly", "Minecraft"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"github", url:"https://github.com/al01cn/mcsd", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/mcsd", kind: "outline"}],
    },
    {
      title: "GSTInfo",
      description:
        "一个用于检测用户设备类型的轻量级 TypeScript 库。",
      tags: ["检测用户设备类型", "TypeScript", "库", "Web库"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"Demo", url:"https://al01cn.github.io/gstinfo/", kind: "primary"},{label:"github", url:"https://github.com/al01cn/gstinfo", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/gstinfo", kind: "outline"}],
    },
    {
      title: "DetectDevice",
      description:
        "gstinfo 是一个用于解析 SillyTavern 数据文件的 TypeScript 库",
      tags: ["SillyTavern", "TypeScript", "库", "解析数据"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"Demo", url:"https://al01cn.github.io/detectdevice/", kind: "primary"},{label:"github", url:"https://github.com/al01cn/detectdevice", kind: "primary"},{label:"gitee", url:"https://gitee.com/al01/detectdevice", kind: "outline"}],
    },
    {
      title: "TemporaryMediaStorageCloudflare",
      description:
        "一个轻量的「临时媒体储存」小工具，专为 Cloudflare Worker 设计，使用 Cloudflare R2 作为存储后端，并在上传时严格控制总容量 ≤ 10GB，避免超出免费存储空间。",
      tags: ["Cloudflare", "临时媒体储存", "存储空间", "小工具", "Cloudflare Worker", "Cloudflare R2"],
      icon: <ImageIcon weight="duotone" size={64} color="#CBD5E1" />,
      links: [{label:"github", url:"https://github.com/al01cn/Temporary-media-storage-cloudflare", kind: "primary"}],
    }
  ],
}
