import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Your First Home Starts Here",
  author: "Doug's Tractor Works",
  logo: "/LOGO.png",
  description:
    "Ready to buy or sell your first home? I’m here to guide you every step of the way with expert advice and personalized support.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    tel: "310-850-9926",
    github: "https://github.com/redpangilinan/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
