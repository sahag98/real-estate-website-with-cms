import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

import { seoTerms } from "./seo"

export const siteConfig: SiteConfig = {
  name: "Alan Reyes | Rise Real Estate",
  author: "Alan Reyes",
  logo: "/site-logo.png",
  description:
    "Ready to buy or sell your first home? I'm here to guide you every step of the way with expert advice and personalized support.",
  keywords: seoTerms,
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "Sahak Arzoumanian",
  },
  links: {
    tel: "661-992-4668",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
