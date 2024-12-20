import "@/styles/globals.css"

import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { ViewTransitions } from "next-view-transitions"
import NextTopLoader from "nextjs-toploader"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@_rdev7",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "relative min-h-screen bg-background  antialiased",
            inter.className
          )}
        >
          <NextTopLoader color="#FFD800" />
          <Navbar />
          {children}

          <Footer />
          <Toaster />
        </body>
      </html>
    </ViewTransitions>
  )
}
