import type { Metadata } from "next"
import "../styles/globals.css"
import "dialog-polyfill/dist/dialog-polyfill.css"
import Navbar from "../components/Navbar"
import CursorGlow from "../components/CursorGlow"
import SmoothHashScroll from "../components/SmoothHashScroll"

export const metadata: Metadata = {
  title: "灵狼AL01，喜欢二次元的技术宅",
  description: "代码与想象力的交汇点，只为了实现自己的奇思妙想",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var legacy = localStorage.getItem('theme');
                  if (legacy) {
                    document.documentElement.setAttribute('data-theme', legacy);
                    localStorage.removeItem('theme');
                    localStorage.setItem('theme-setting', JSON.stringify({mode:'manual', value: legacy}));
                    return;
                  }
                  var raw = localStorage.getItem('theme-setting');
                  var mode = 'system';
                  var value = 'light';
                  if (raw) {
                    try {
                      var s = JSON.parse(raw);
                      mode = s.mode || 'system';
                      value = s.value || 'light';
                    } catch {}
                  }
                  var apply = function(v){ document.documentElement.setAttribute('data-theme', v); };
                  if (mode === 'manual') {
                    apply(value);
                  } else if (mode === 'system') {
                    var v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    apply(v);
                  } else {
                    var h = new Date().getHours();
                    var v2 = (h >= 7 && h < 19) ? 'light' : 'dark';
                    apply(v2);
                  }
                } catch {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=JetBrains+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="cursor-glow" />
        <div className="bg-grid" />
        <SmoothHashScroll />
        <Navbar />
        <CursorGlow />
        {children}
      </body>
    </html>
  )
}
