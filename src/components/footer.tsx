// React and Next.js imports
import type { SVGProps } from "react"
import Image from "next/image"
// Icon imports
import { Link } from "next-view-transitions"
// Third-party library imports
import Balancer from "react-wrap-balancer"

import { siteConfig } from "@/config/site"

// UI component imports
import { Button } from "./ui/button"

// Brand icons as inline SVGs (lucide-react no longer ships brand logos).
// They use currentColor so they follow the button's text color.

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.15 0-3.522.012-4.764.069-1.07.049-1.652.228-2.038.379-.512.199-.878.437-1.262.821-.384.384-.622.75-.821 1.262-.151.386-.33.968-.379 2.038-.057 1.242-.069 1.614-.069 4.764s.012 3.522.069 4.764c.049 1.07.228 1.652.379 2.038.199.512.437.878.821 1.262.384.384.75.622 1.262.821.386.151.968.33 2.038.379 1.242.057 1.614.069 4.764.069s3.522-.012 4.764-.069c1.07-.049 1.652-.228 2.038-.379.512-.199.878-.437 1.262-.821.384-.384.622-.75.821-1.262.151-.386.33-.968.379-2.038.057-1.242.069-1.614.069-4.764s-.012-3.522-.069-4.764c-.049-1.07-.228-1.652-.379-2.038-.199-.512-.437-.878-.821-1.262-.384-.384-.75-.622-1.262-.821-.386-.151-.968-.33-2.038-.379-1.242-.057-1.614-.069-4.764-.069zm0 3.063a4.972 4.972 0 1 1 0 9.944 4.972 4.972 0 0 1 0-9.944zm0 8.2a3.228 3.228 0 1 0 0-6.456 3.228 3.228 0 0 0 0 6.456zm6.33-8.4a1.162 1.162 0 1 1-2.324 0 1.162 1.162 0 0 1 2.324 0z" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="z-20 w-full border-t bg-secondary px-4 pb-5 pt-10 text-background md:px-16 lg:px-40">
      <div className="space-y-3">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="fade-in not-prose flex flex-col gap-3">
            <Link href="/">
              <h3 className="sr-only text-foreground">{siteConfig.name}</h3>
              <Image
                src={siteConfig.logo}
                alt="Logo"
                width={502}
                height={497}
                className="w-20 transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p className="text-lg text-foreground">
              <Balancer>{siteConfig.description}</Balancer>
            </p>
            <Link href={`tel:${siteConfig.links.tel}`} target="_blank">
              <Button className="text-base font-bold">Get Started Today</Button>
            </Link>
          </div>
          <div className="fade-in fade-in-delay-1 flex flex-col gap-2 text-foreground">
            <h2 className="mb-2">Links</h2>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="#expertise"
            >
              Expertise
            </Link>
            <Link
              className="text-lg font-medium underline underline-offset-2"
              href="#faq"
            >
              Faq
            </Link>
          </div>
          {/* <div className="flex flex-col gap-2 text-foreground">
            <h5 className="mb-2">Business Hours</h5>
            <span className="font-medium">M-TH : 5:30am-10am & 5pm-8pm</span>
            <span className="font-medium">F: 2pm - 8pm</span>
            <span className="font-medium">SAT&SUN : 2pm - 8pm</span>
          </div> */}
          {/* <div className="flex flex-col gap-2 text-foreground">
            <h5 className="font-bold">Service Areas (If applicable)</h5>
            <p>Anywhere within "county" (and surrounding borders) including:</p>
            <ul className="space-y-2 ">
              <li>- City 1</li>
              <li>- City 2</li>
              <li>- City 3</li>
              <li>- City 4</li>
              <li>- City 5</li>
            </ul>
          </div> */}
        </div>
        <div className="fade-in fade-in-delay-2 not-prose flex flex-col justify-between gap-6 border-t border-t-foreground pt-5 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Link
              target="_blank"
              href={"https://www.instagram.com/reyesrealty7"}
            >
              <Button size="icon" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </Button>
            </Link>

            <Link
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=100089914718816"}
            >
              <Button size="icon" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="text-foreground">
            © Alan Reyes . All rights reserved. 2024-present.
          </p>
        </div>
      </div>
    </footer>
  )
}
