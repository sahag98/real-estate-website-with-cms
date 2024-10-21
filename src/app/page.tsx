import Image from "next/image"
import { Instagram } from "lucide-react"
import { Link } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import BlurInButton from "@/components/ui/blur-button"
import BlurIn from "@/components/ui/blur-in"
import { Button, buttonVariants } from "@/components/ui/button"
import AboutImages from "@/components/about-images"
import Expertise from "@/components/expertise"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import Services from "@/components/services"
import Tractor from "@/components/tractor"

export default function Home() {
  return (
    <main className="relative mt-10 flex min-h-screen flex-col items-center justify-center md:mt-0">
      <div className="relative flex min-h-screen w-full flex-col-reverse items-center justify-between gap-4 pt-24 text-center md:flex-row md:gap-0 lg:h-screen">
        <div className="flex h-full flex-1 items-center justify-center bg-[#212121] p-4">
          <Image
            className="md:w-3/5"
            src={"/hero-img.jpeg"}
            priority
            width={635}
            height={847}
            alt="Alan Reyes"
          />
        </div>
        <div className="relative flex h-full flex-1 flex-col items-start justify-center gap-4  px-4 md:px-12">
          {/* <h1 className="w-full text-start text-5xl font-bold sm:text-5xl md:w-3/4 md:text-6xl  lg:text-7xl"> */}
          <BlurIn
            word={siteConfig.name}
            className="w-full text-start text-5xl font-bold sm:text-5xl md:w-3/4 md:text-6xl  lg:text-7xl"
          />
          {/* </h1> */}
          <BlurIn
            word={siteConfig.description}
            className="r max-w-[42rem] text-start text-base leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          />
          {/* <p className="r max-w-[42rem] text-start leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p> */}

          <div className="flex w-full flex-col gap-4 md:gap-6 lg:flex-row">
            <BlurInButton
              className="md:animate-buttonheartbeat"
              word="Find Your First Home"
            />
            <BlurInButton
              className="bg-secondary text-secondary-foreground"
              word="Ask About Selling"
            />
            {/* <Link
              href={`tel:${siteConfig.links.tel}`}
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg" }),
                "animate-buttonheartbeat cursor-pointer text-base font-bold"
              )}
            >
              Find Your First Home
            </Link> */}

            {/* <Link
              href={"/gallery"}
              className={cn(
                buttonVariants({ size: "lg", variant: "secondary" }),
                "cursor-pointer text-sm  font-bold lg:text-lg"
              )}
            >
              Ask About Selling
            </Link> */}
          </div>
        </div>
      </div>
      <div className="ext-foreground relative mt-10 flex w-full flex-col items-center justify-center bg-none px-0 md:mt-0 md:bg-about-img md:py-24 lg:flex-row lg:px-40 lg:py-20">
        <div className="absolute inset-0 h-full w-full bg-black/40" />
        <section className="z-10 flex flex-col gap-5 bg-secondary px-4 py-4 md:flex-row md:gap-0  md:px-0 md:py-0 md:pl-20">
          <div className="flex flex-1 flex-col items-start justify-center gap-5">
            <h2 className="w-full text-2xl font-bold md:w-4/5 lg:text-5xl">
              Making Your First Home a Reality
            </h2>
            <p className="w-full font-medium md:w-4/5">
              With years of experience helping first-time buyers and sellers,
              I&apos;m passionate about making the real estate process simple. I
              work closely with you to ensure you feel informed and confident
              every step of the way.
            </p>
            <Link
              href={"/about"}
              className="mb-3 font-bold text-primary underline"
            >
              Learn More
            </Link>
          </div>
          <Image
            src={"/about-placeholder.png"}
            width={1000}
            height={1000}
            alt="about placeholder"
            className="flex-1 object-cover lg:w-1/2"
          />
        </section>

        {/* <AboutImages /> */}
      </div>
      {/* <Services /> */}
      <Expertise />
      <FAQ />
    </main>
  )
}
