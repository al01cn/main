import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './config/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        secondary: "var(--color-secondary)",
        "text-main": "var(--color-text-main)",
        "text-muted": "var(--color-text-muted)",
        "bg-body": "var(--color-bg-body)",
        "bg-surface": "var(--color-bg-surface)",
        "bg-subtle": "var(--color-bg-subtle)",
        "border-color": "var(--border-color)",
        "nav-bg": "var(--nav-bg)",
      },
      fontFamily: {
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        "noto-sc": ["var(--font-noto-sc)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config
