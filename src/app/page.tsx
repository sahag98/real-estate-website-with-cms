import Image from "next/image"
import { Link } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import AboutImages from "@/components/about-images"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import Services from "@/components/services"
import Tractor from "@/components/tractor"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 text-center lg:h-screen">
        <h1 className="text-start text-5xl font-bold sm:text-5xl md:text-6xl lg:text-center lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] text-start leading-normal text-muted-foreground sm:text-xl sm:leading-8 lg:text-center">
          {siteConfig.description}
        </p>
        <div className="flex w-full flex-col justify-center gap-2 lg:flex-row">
          <Link
            href={`tel:${siteConfig.links.tel}`}
            target="_blank"
            className={cn(
              buttonVariants({ size: "lg" }),
              "animate-buttonheartbeat cursor-pointer text-base font-bold"
            )}
          >
            Main Action
          </Link>

          <Link
            href={"/gallery"}
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "cursor-pointer text-sm  font-bold lg:text-lg"
            )}
          >
            Secondary Action
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-3 bg-primary/25 px-4 py-12 text-foreground md:py-24 lg:flex-row lg:px-40 lg:py-32">
        <section className="flex flex-col items-start gap-3">
          <h3 className="text-lg font-medium">About</h3>
          <h2 className="w-full text-2xl font-medium lg:w-2/3 lg:text-5xl">
            Welcome to <span className="font-semibold">{siteConfig.name}</span>
          </h2>
          <p className="text-lg font-medium lg:text-xl">
            Your business moto in 1 line
          </p>
          <p className="w-full lg:w-2/3">
            Short about paragraph about who you are and what you do.
          </p>
          <Link
            href={"/about"}
            className="mt-3 font-bold text-primary underline"
          >
            Learn More
          </Link>
        </section>
        <Image
          src={"/about-placeholder.png"}
          width={1000}
          height={1000}
          alt="about placeholder"
          className="rounded-lg object-cover lg:w-1/2"
        />
        {/* <AboutImages /> */}
      </div>
      <Services />
      <FAQ />
    </main>
  )
}
