import React from "react"
import Image from "next/image"
import { getAboutHome } from "@/sanity/sanity-utils"
import { Link } from "next-view-transitions"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

const AboutHome = async () => {
  const aboutHomeData = await getAboutHome()

  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-about-img bg-cover px-0 py-24 text-background md:mt-0 lg:flex-row lg:px-40 lg:py-20">
      <div className="absolute inset-0 h-full w-full bg-black/40 md:bg-black/20" />
      <section className="z-10 flex flex-col gap-5 px-4 py-4 md:flex-row md:gap-0 md:px-0 md:py-40 md:pl-20">
        <div className="flex flex-1 flex-col items-center justify-center gap-5 text-center fade-in">
          <h2 className="w-full text-balance text-3xl font-bold md:w-4/5 lg:text-5xl">
            {aboutHomeData[0]?.title}
          </h2>
          <p className="w-full font-medium md:w-4/5">
            {aboutHomeData[0]?.description}
          </p>
          <div className="fade-in-delay-1 flex items-center gap-4 fade-in md:flex-row">
            <Link
              href={"/about"}
              className={cn(buttonVariants(), "text-base font-bold")}
            >
              Learn More
            </Link>
            <Link
              href={"/blog"}
              className="font-bold text-background underline"
            >
              Check out my blogs
            </Link>
          </div>
        </div>
        {/* <Image
          src={aboutHomeData[0]?.image}
          width={1000}
          height={1000}
          alt={aboutHomeData[0]?.title}
          className="aspect-square flex-1 object-cover lg:w-1/2"
        /> */}
      </section>
    </div>
  )
}

export default AboutHome
