import React from "react"
import Image from "next/image"
import { servicesData } from "@/data/data-services"

import PropertyCard from "./property-card"
import SectionHeader from "./section-header"
import { Button } from "./ui/button"

const Expertise = async () => {
  // const url =
  //   "https://us-real-estate-listings.p.rapidapi.com/for-sale?location=Palmdale%2C%20CA&offset=0&limit=50&sort=relevance&days_on=1&expand_search_radius=1"
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "e8b66cbda9msha38ca612001a788p1827b0jsn4e2e9ce1a96c",
  //     "x-rapidapi-host": "us-real-estate-listings.p.rapidapi.com",
  //   },
  // }

  // const response = await fetch(url, options)
  // const results = await response.json()
  // console.log(
  //   "result: ",
  //   JSON.stringify(results.listings[0].primary_photo.href)
  // )

  return (
    <div
      id="services"
      className="md:bg-expertise-img relative flex w-full flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat px-4 pb-24 pt-20 lg:px-40"
    >
      <div className="absolute inset-0 h-full w-full bg-black/40" />
      <SectionHeader title="My Expertise" />

      <section className="z-10 flex flex-col  items-center justify-between gap-10 md:flex-row">
        <div className="flex flex-col items-center gap-9 bg-secondary p-9">
          <h2 className="text-4xl font-bold">Buying</h2>
          <p className="md:text-lg">
            Looking to purchase your first home? I specialize in guiding
            first-time buyers through every step of the home-buying process.
            From finding the perfect property to negotiating the best price,
            I&apos;m here to help you make informed decisions and secure your
            dream home with confidence.
          </p>
          <Button className="text-base font-bold">Get Started</Button>
        </div>
        <div className="flex flex-col items-center gap-9 bg-secondary p-9">
          <h2 className="text-4xl font-bold">Selling</h2>
          <p className="md:text-lg">
            Ready to sell your home? I provide expert guidance to first-time
            sellers, ensuring a smooth and profitable transaction. With a
            strategic marketing plan and deep market insights, I&apos;ll help
            you attract qualified buyers and get the best possible return on
            your investment.
          </p>
          <Button className="text-base font-bold">Get Started</Button>
        </div>
      </section>

      {/* <p>
        Have a look at this list of services we offer and call us for more
        information.
      </p> */}
    </div>
  )
}

export default Expertise
