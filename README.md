# 灵狼AL01 (Spirit Wolf AL01) - 个人主页

一个基于 Next.js + GSAP 的现代化单页个人网站，融合了二次元美学与技术之美。代码与想象力的交汇点，只为了实现自己的奇思妙想。

## 🛠 技术栈

本项目采用了最新的前端技术栈，以确保高性能和良好的开发体验：

- **核心框架**: [Next.js 16](https://nextjs.org/) (App Router)
- **开发语言**: [TypeScript](https://www.typescriptlang.org/) (v5.9+)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/) (v3.4)
- **动画引擎**: [GSAP](https://gsap.com/) (ScrollTrigger)
- **包管理器**: [Bun](https://bun.sh/)
- **图标库**: [Phosphor Icons](https://phosphoricons.com/), [Iconify](https://iconify.design/)
- **UI 组件**: Embla Carousel (轮播), Radix UI (底层原语)

## 🚀 快速开始

### 环境要求

- [Bun](https://bun.sh/) (推荐最新版)
- Node.js (v18+, 仅作为运行环境支持)

### 安装依赖

本项目使用 Bun 作为包管理器，请确保不要使用 npm/yarn/pnpm 安装依赖，以免产生冲突。

```bash
bun install
```

### 开发模式

启动本地开发服务器：

```bash
bun run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建与部署

本项目完全兼容 Vercel 部署。

构建生产版本：

```bash
bun run build
```

启动生产服务：

```bash
bun run start
```

## 📂 项目结构

```
e:\code_project\Web\cn.al01\main
├── app/                  # Next.js App Router 页面及布局
│   ├── layout.tsx        # 全局布局
│   └── page.tsx          # 首页入口
├── components/           # React 组件
│   ├── ui/               # 基础 UI 组件 (如有)
│   ├── Hero.tsx          # 首页首屏
│   ├── Navbar.tsx        # 导航栏
│   ├── Projects.tsx      # 项目展示
│   ├── Skills.tsx        # 技能展示
│   └── ...
├── config/               # 站点配置文件
│   ├── site.tsx          # 基础站点信息
│   ├── projects.tsx      # 项目数据
│   └── skills.tsx        # 技能数据
├── hooks/                # 自定义 React Hooks
│   ├── useGsapHomeAnimations.ts # 首页动画逻辑
│   └── useTheme.ts       # 主题切换逻辑
├── public/               # 静态资源 (图片、图标)
├── styles/               # 全局样式
│   └── globals.css       # Tailwind 基础样式
└── ...
```

## 📏 代码规范

为了保持代码质量和一致性，请遵循以下规范：

1.  **TypeScript**: 严格类型检查，避免使用 `any`。所有 Props 和 State 都应有明确的接口定义。
2.  **组件结构**: 使用函数式组件 (Functional Components)。
3.  **命名规范**:
    - 组件文件：`PascalCase` (如 `Navbar.tsx`)
    - 工具函数/Hooks：`camelCase` (如 `useTheme.ts`)
    - 常量：`UPPER_SNAKE_CASE`
4.  **样式**: 优先使用 Tailwind CSS 类名。对于复杂动画或特定样式，可在 `globals.css` 中定义或使用 CSS Modules（如需）。
5.  **导入顺序**: React/Next 核心 -> 第三方库 -> 本地组件 -> 配置/工具 -> 样式。

## 📝 代码注释规范

1.  **文件头注释**: 关键逻辑文件应简要说明文件用途。
2.  **函数/组件注释**: 复杂的函数或组件应使用 JSDoc 格式注释，说明参数和返回值。
3.  **行内注释**: 关键逻辑或复杂算法需添加简短的行内注释 (`// ...`) 解释“为什么这样做”。

示例：

```typescript
/**
 * 这是一个处理主题切换的 Hook
 * @returns {object} 包含当前主题和切换函数
 */
export function useTheme() {
  // ...
}
```

## 🤝 贡献指南

欢迎提交 Issue 或 Pull Request！

1.  Fork 本仓库。
2.  创建一个新的分支 (`git checkout -b feature/AmazingFeature`)。
3.  提交你的更改 (`git commit -m 'Add some AmazingFeature'`)。
4.  推送到分支 (`git push origin feature/AmazingFeature`)。
5.  提交 Pull Request。

## 📜 许可

本项目采用 [Apache License 2.0](LICENSE) 许可。
详细信息请参阅 LICENSE 文件。

Copyright (c) 2024-2025 Spirit Wolf AL01
