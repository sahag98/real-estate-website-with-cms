import Image from "next/image"
import { getHeroImg } from "@/sanity/sanity-utils"
import { Link } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import BlurInButton from "@/components/ui/blur-button"
import BlurIn from "@/components/ui/blur-in"
import AboutHome from "@/components/about-home"
import Expertise from "@/components/expertise"
import FAQ from "@/components/faq"
import PropertyListings from "@/components/property-list"
import Reviews from "@/components/reviews"
import PropertySuccessStories from "@/components/success-stories"

export default async function Home() {
  const heroImg = await getHeroImg()

  console.log("hero img: ", heroImg[0].image)
  return (
    <main className="relative mt-10 flex min-h-screen flex-col items-center justify-center md:mt-0">
      <div className="relative flex min-h-screen w-full flex-col-reverse items-center justify-between gap-4 pt-24 text-center md:flex-row md:gap-0 lg:h-screen">
        <div className="flex h-full flex-1 items-center justify-center bg-[#212121] p-4">
          <Image
            className="md:w-3/5"
            src={heroImg[0].image}
            priority
            width={635}
            height={847}
            alt="Alan Reyes"
          />
        </div>
        <div className="relative flex h-full flex-1 flex-col items-start justify-center gap-4  px-4 md:px-12">
          {/* <h1 className="w-full text-start text-5xl font-bold sm:text-5xl md:w-3/4 md:text-6xl  lg:text-7xl"> */}
          <BlurIn
            word={"Your First Home Starts Here"}
            className="w-full text-start text-5xl font-bold sm:text-5xl md:w-3/4 md:text-6xl  lg:text-7xl"
          />
          {/* </h1> */}
          <BlurIn
            word={siteConfig.description}
            className="r max-w-[42rem] text-start text-base leading-normal text-foreground/75 sm:text-xl sm:leading-8"
          />
          {/* <p className="r max-w-[42rem] text-start leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            {siteConfig.description}
          </p> */}

          <div className="flex w-full flex-col gap-3 md:gap-6 lg:flex-row">
            <Link className="" href={"#properties"}>
              <BlurInButton
                className="w-full md:animate-buttonheartbeat"
                word="Find Your First Home"
              />
            </Link>
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
      <AboutHome />
      {/* <Services /> */}
      <PropertyListings />
      <Expertise />
      <Reviews />
      <PropertySuccessStories />
      <FAQ />
    </main>
  )
}
