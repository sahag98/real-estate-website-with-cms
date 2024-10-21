import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

import { seoTerms } from "./seo"

export const siteConfig: SiteConfig = {
  name: "Your First Home Starts Here",
  author: "Doug's Tractor Works",
  logo: "/LOGO.png",
  description:
    "Ready to buy or sell your first home? I'm here to guide you every step of the way with expert advice and personalized support.",
  keywords: seoTerms,
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "Sahak Arzoumanian",
  },
  links: {
    tel: "310-850-9926",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
