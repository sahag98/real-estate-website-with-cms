import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getStats } from "@/sanity/sanity-utils"
import { Instagram } from "lucide-react"

import { siteConfig } from "@/config/site"
import BlurInButton from "@/components/ui/blur-button"
import BlurIn from "@/components/ui/blur-in"
import { Button } from "@/components/ui/button"
import Process from "@/components/process"
import Stats from "@/components/stats"
import Values from "@/components/values"

export const metadata: Metadata = {
  title: "About",
  description:
    "With years of experience helping first-time buyers and sellers, I'm passionate about making the real estate process simple. I work closely with you to ensure you feel informed and confident every step of the way.",
}

const AboutPage = async () => {
  const stats = await getStats()

  return (
    <div className="flex min-h-screen flex-col items-start justify-between">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-between gap-4 pt-24 text-center md:flex-row-reverse md:gap-0 lg:h-screen">
        <div className="flex h-full flex-1 items-center justify-center bg-secondary p-4">
          <Image
            className="md:w-3/5"
            src={"/hero-img.jpeg"}
            width={635}
            height={847}
            alt="Alan Reyes"
          />
        </div>
        <div className="relative flex h-full flex-1 flex-col items-start justify-center gap-8 px-4 md:px-28">
          {/* <h1 className="w-full text-start text-5xl font-bold sm:text-5xl md:w-3/4 md:text-6xl  lg:text-7xl"> */}
          <BlurIn
            word="Nice to meet you"
            className="w-full text-start text-2xl font-medium"
          />
          {/* </h1> */}
          <BlurIn
            word="I am Alan Reyes"
            className="text-start text-4xl font-semibold  text-primary md:text-5xl"
          />

          <BlurIn
            word="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolores vero, voluptatibus neque dolor voluptas suscipit
            perspiciatis pariatur dolore tempore temporibus optio repellat culpa
            voluptates hic, repudiandae nisi. Praesentium, repudiandae!"
            className="text-start text-xl text-muted-foreground"
          />
          <Link href={`tel:${siteConfig.links.tel}`}>
            <BlurInButton word="Get in Touch" />
          </Link>
          {/* <p className="r max-w-[42rem] text-start leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p> */}
          {/* <div className="flex flex-col gap-4 lg:flex-row">
            <BlurInButton word="Find Your First Home" />
            <BlurInButton
              className="bg-secondary text-secondary-foreground"
              word="Ask About Selling"
            />
          </div> */}
        </div>
      </div>
      <Stats stats={stats} />
      <Values />
      <Process />
      <div className="relative mt-10 flex w-full flex-col items-center justify-center bg-none px-0 text-foreground md:mt-0 md:bg-about-img md:py-24 lg:flex-row lg:px-40 lg:py-20">
        <div className="absolute inset-0 h-full w-full bg-black/40" />

        <div className="z-10 flex flex-col items-center justify-center gap-7 bg-secondary px-4 py-16 text-center">
          <h2 className="w-full text-2xl font-bold md:w-4/5 lg:text-5xl">
            Ready to Find Your New Home?
          </h2>
          <p className="w-full font-medium md:w-4/5 md:text-lg">
            Whether you&apos;re looking to buy your dream home or sell your
            property, I&apos;m here to guide you every step of the way.
            Let&apos;s make your real estate journey seamless and successful.
          </p>
          <Link href={"/#properties"}>
            <Button className="text-base font-bold">Get Started Today</Button>
          </Link>
        </div>

        {/* <AboutImages /> */}
      </div>
    </div>
  )
}

export default AboutPage
