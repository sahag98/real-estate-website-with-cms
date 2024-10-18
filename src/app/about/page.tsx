import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

import { siteConfig } from "@/config/site"
import BlurInButton from "@/components/ui/blur-button"
import BlurIn from "@/components/ui/blur-in"
import { Button } from "@/components/ui/button"
import Process from "@/components/process"
import Values from "@/components/values"

const AboutPage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-start justify-between">
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
        <div className="relative flex h-full flex-1 flex-col items-start justify-center gap-8  px-4 md:px-12">
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
          <BlurInButton word="Get in Touch" />
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
          <div className="absolute bottom-5 flex  flex-row justify-between gap-5 self-end">
            {/* <section className="flex w-3/4 flex-col items-start gap-1">
              <p className=" text-left text-sm">
                Through wisdom is an house builded; and by understanding it is
                established: And by knowledge shall the chambers be filled with
                all precious and pleasant riches."
              </p>
              <p className="text-left text-sm">- Proverbs 24:3-4</p>
            </section> */}
            <Link target="_blank" href={""}>
              <Button variant={"secondary"} size="icon">
                <Instagram className="" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Values />
      {/* <Process /> */}
    </div>
  )
}

export default AboutPage
