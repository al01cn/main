import type { Metadata, Viewport } from "next"
import Script from "next/script"
import "../styles/globals.css"
import "dialog-polyfill/dist/dialog-polyfill.css"
import Navbar from "../components/Navbar"
import CursorGlow from "../components/CursorGlow"
import SmoothHashScroll from "../components/SmoothHashScroll"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

const title = "灵狼AL01，喜欢二次元的技术宅"
const description = "灵狼AL01的个人主页。热衷于将代码与想象力结合，为用户提供优雅的 Web 应用。喜欢探索提瓦特大陆，也喜欢与星穹铁道一同开拓。"
const domain = "https://www.al01.cn"

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: title,
    template: "%s | 灵狼AL01",
  },
  description: description,
  keywords: ["灵狼AL01", "Web开发", "前端开发", "React", "Next.js", "二次元", "原神", "星穹铁道", "技术宅"],
  authors: [{ name: "灵狼AL01", url: domain }],
  creator: "灵狼AL01",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: domain,
    title: title,
    description: description,
    siteName: "灵狼AL01",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "灵狼AL01 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: ["/icon.png"],
    creator: "@alwolf_cn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "灵狼AL01",
              "url": "https://cn.al01.xyz",
              "jobTitle": "Web Developer",
              "image": "https://cn.al01.xyz/icon.png",
              "description": "热衷于将代码与想象力结合，为用户提供优雅的 Web 应用。"
            }),
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
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MWN3Q5B5');
            `,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-LBSGGY1M6H" strategy="afterInteractive" />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LBSGGY1M6H');
            `,
          }}
        />
        
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWN3Q5B5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        <div className="cursor-glow" />
        <div className="bg-grid" />
        <SmoothHashScroll />
        <Navbar />
        <CursorGlow />
        {children}
        
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "047ee82d29d143dbb1b95834f48f5357"}'
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
