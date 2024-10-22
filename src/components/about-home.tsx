import React from "react"
import Image from "next/image"
import { getAboutHome } from "@/sanity/sanity-utils"
import { Link } from "next-view-transitions"

const AboutHome = async () => {
  const aboutHomeData = await getAboutHome()

  return (
    <div className="ext-foreground relative mt-10 flex w-full flex-col items-center justify-center bg-none px-0 md:mt-0 md:bg-about-img md:py-24 lg:flex-row lg:px-40 lg:py-20">
      <div className="absolute inset-0 h-full w-full bg-black/40" />
      <section className="z-10 flex flex-col gap-5 bg-secondary px-4 py-4 md:flex-row md:gap-0  md:px-0 md:py-0 md:pl-20">
        <div className="flex flex-1 flex-col items-start justify-center gap-5">
          <h2 className="w-full text-2xl font-bold md:w-4/5 lg:text-5xl">
            {aboutHomeData[0]?.title}
          </h2>
          <p className="w-full font-medium md:w-4/5">
            {aboutHomeData[0]?.description}
          </p>
          <Link
            href={"/about"}
            className="mb-3 font-bold text-primary underline"
          >
            Learn More
          </Link>
        </div>
        <Image
          src={aboutHomeData[0]?.image}
          width={1000}
          height={1000}
          alt={aboutHomeData[0]?.title}
          className="aspect-square flex-1 object-cover lg:w-1/2"
        />
      </section>
    </div>
  )
}

export default AboutHome
