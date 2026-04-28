import React from "react"
import { getExpertise } from "@/sanity/sanity-utils"

import SectionHeader from "./section-header"
import { Button } from "./ui/button"

const Expertise = async () => {
  const expertises = await getExpertise()

  return (
    <div
      id="expertise"
      className="relative flex w-full flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat px-4 pb-24 pt-20 md:bg-expertise-img lg:px-40"
    >
      <div className="absolute inset-0 h-full w-full bg-black/40" />
      <SectionHeader title="My Expertise" />

      <section className="z-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row md:items-stretch">
        {expertises.map((expertise, index) => (
          <div
            key={expertise._id}
            className={`fade-in flex h-full flex-1 flex-col items-center gap-9 bg-secondary p-9 text-background ${
              index % 3 === 1
                ? "fade-in-delay-1"
                : index % 3 === 2
                  ? "fade-in-delay-2"
                  : ""
            }`}
          >
            <h2 className="text-4xl font-bold">{expertise.name}</h2>
            <p className="flex-1 md:text-lg">{expertise.description}</p>
            <Button className="mt-auto text-base font-bold">Get Started</Button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Expertise
