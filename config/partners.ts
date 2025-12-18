
export interface Partner {
  name: string
  avatar: string
  url?: string
  type?: "individual" | "company" // 默认为 individual (显示头像和名字)
}

export interface PartnersConfig {
  title: string
  subtitle: string
  partners: Partner[]
}

export const partnersConfig: PartnersConfig = {
  title: "合作伙伴",
  subtitle: "感谢这些伙伴的支持与协作",
  partners: [
    {
      name: "Vercel",
      avatar: "https://api.iconify.design/logos:vercel.svg",
      url: "https://vercel.com",
      type: "company",
    },
    {
      name: "Mambashock",
      avatar: "https://www.mambashock.com/images/logo.png",
      url: "http://www.mambashock.cn",
      type: "company",
    },
  ],
}
