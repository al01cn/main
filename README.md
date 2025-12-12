# NexTaku | 科技宅的异世界

一个基于 Next.js + GSAP 的单页网站，融合 1.html 的动效与 2.html 的样式布局。

## 技术栈
- Next.js App Router（TypeScript）
- GSAP + ScrollTrigger
- next/font 加载 Google Fonts（Fredoka、JetBrains Mono、Noto Sans SC）
- Phosphor Icons Web CDN

## 安装与运行
1. 使用 Bun 安装依赖
```
bun install
```
2. 开发模式
```
bun run dev
```
3. 访问地址
- 默认本地开发端口输出为控制台显示的地址

## 项目结构
```
app/
  layout.tsx
  page.tsx
components/
  Navbar.tsx
  Hero.tsx
  Skills.tsx
  Projects.tsx
  About.tsx
  Sponsor.tsx
  Footer.tsx
  CursorGlow.tsx
config/
  site.ts
hooks/
  useGsapHomeAnimations.ts
styles/
  globals.css
```

## 站点配置
- 配置文件：`config/site.ts`
- 导出对象：`siteConfig`，包含 `nickname`、`brandName`、`github`、`email`、`icp`、`psb`、`copyrightOwner`、`copyrightStartYear`
- 使用示例：
  - Navbar 品牌名：`components/Navbar.tsx:90` 读取 `siteConfig.brandName`
  - Hero 昵称与 GitHub 链接：`components/Hero.tsx:13`、`components/Hero.tsx:17` 读取 `siteConfig.nickname`、`siteConfig.github`
  - Footer 昵称与备案信息：`components/Footer.tsx:16`、`components/Footer.tsx:20-37` 读取 `siteConfig.nickname`、`siteConfig.icp`、`siteConfig.psb`

## 分区配置
- 装备库：`config/skills.ts`
  - 导出对象：`skillsConfig`，包含 `title`、`subtitle`、`items[{ name, icon }]`
  - 使用位置：`components/Skills.tsx:4` 引入；`components/Skills.tsx:18-23` 渲染标题副标题与技能项
- 次元口袋：`config/projects.ts`
  - 导出对象：`projectsConfig`，包含 `title`、`subtitle`、`projects[{ title, description, tags[], icon, links[] }]`
  - 使用位置：在 `components/Projects.tsx` 中引入并以 Carousel 渲染项目卡片

## 项目封面显示规则
- 支持两种封面来源：`img`（图片路径，来自 `public/`）与 `icon`（JSX 图标元素）
- 优先级：当同时存在 `img` 与 `icon` 时，优先显示 `img`
- 回退机制：当 `img` 加载失败时，自动回退到 `icon`；若两者均不存在，显示“未设置封面”
- 配置示例：`config/projects.tsx` 中为项目项添加 `img: "/text_logo.png"` 或设置 `icon: <Acorn size={64} />`

## 次元口袋 Carousel 交互
- 核心库：使用 `embla-carousel-react` 提供流畅的轮播体验
- PC：
  - 点击左右按钮平滑切换项目
  - 支持鼠标滚轮流畅切换，体验丝滑
  - 按钮状态自动同步（首尾自动禁用）
- 移动端：
  - 支持原生手势的丝滑拖拽与回弹
  - 惯性滚动体验自然
- 无障碍：导航按钮具备 `aria-label`；当项目数≤1时自动隐藏
- 样式：保留原卡片视觉与动画，交互更加现代化

## 代码规范
- 使用 TypeScript，避免 `any`
- 组件采用函数式写法，保证可读性与复用性
- 动效逻辑隔离为 Hook，统一注册与清理

## 注释规范
- 组件与 Hook 内部使用简洁行内注释（必要时）
- 样式以语义类名组织，变量定义在 `:root` 与 `[data-theme=\"dark\"]`

## 动效与布局
- 初次载入：Navbar 与 Hero 采用时间线入场
- 滚动出现：分区标题与栅格卡片使用 ScrollTrigger
- 光标跟随：`CursorGlow` 使用 GSAP 平滑跟随，移动端自动隐藏
- 布局与主题：继承 2.html 的响应式与暗色模式

## 主题模式
- 手动：点击 Navbar 太阳/月亮按钮切换亮色与暗色
- 模式切换按钮：点击循环切换“手动 → 跟随浏览器 → 跟随时间”，图标分别为“手掌/显示器/时钟”，当前模式可视化
- 跟随浏览器：实时响应系统主题变更
- 跟随时间：依据本地时区 07:00–19:00 亮色，其余暗色
- 优先级：手动设置优先，其次为所选择的跟随模式（浏览器或时间）
- 持久化：设置保存在 `localStorage` 的 `theme-setting`

## 贡献指南
- 提交前运行诊断工具，修复类型与语法问题
- 保持类名与动画语义一致，避免随意更改

## 许可
- MIT
