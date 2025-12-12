import { Code, FileTs, PaintBrush, Database, Robot, GameController, Atom } from "@phosphor-icons/react"

export interface SkillItem {
  name: string
  icon: React.ReactNode
}

export interface SkillsConfig {
  title: string
  subtitle: string
  items: SkillItem[]
}

export const skillsConfig: SkillsConfig = {
  title: "装备库",
  subtitle: "已点亮的技术技能树",
  items: [
    { name: "React", icon: <Atom weight="duotone" className="skill-icon" /> },
    { name: "TypeScript", icon: <FileTs weight="duotone" className="skill-icon" /> },
    { name: "Node.js", icon: <Database weight="duotone" className="skill-icon" /> },
    { name: "AI/LLM", icon: <Robot weight="duotone" className="skill-icon" /> },
  ],
}

