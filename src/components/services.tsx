import React from "react"
import Image from "next/image"
import { servicesData } from "@/data/data-services"

import PropertyCard from "./property-card"
import SectionHeader from "./section-header"

const Services = async () => {
  const url =
    "https://us-real-estate-listings.p.rapidapi.com/for-sale?location=Palmdale%2C%20CA&offset=0&limit=50&sort=relevance&days_on=1&expand_search_radius=1"
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e8b66cbda9msha38ca612001a788p1827b0jsn4e2e9ce1a96c",
      "x-rapidapi-host": "us-real-estate-listings.p.rapidapi.com",
    },
  }

  const response = await fetch(url, options)
  const results = await response.json()
  console.log(
    "result: ",
    JSON.stringify(results.listings[0].primary_photo.href)
  )

  return (
    <div
      id="services"
      className="flex w-full flex-col items-center justify-center gap-5 px-4 pb-24 pt-20 lg:px-40"
    >
      <SectionHeader title="Our Listings" />
      {/* <p>
        Have a look at this list of services we offer and call us for more
        information.
      </p> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {results.listings.map((result: any) => (
          <PropertyCard key={result.property_id} property={result} />
        ))}
      </div>
    </div>
  )
}

export default Services
