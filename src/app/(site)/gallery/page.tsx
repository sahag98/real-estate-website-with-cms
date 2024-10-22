import React from "react"
import Image from "next/image"
import { beforeAfterImages } from "@/data/beforeAfterImages"

import { Button } from "@/components/ui/button"
import BeforeAfterImage from "@/components/before-after"
import Process from "@/components/process"
import Values from "@/components/values"

const GalleryPage = () => {
  const beforeImage = "/tractorand.jpeg"
  const afterImage = "/tractor.jpeg"
  return (
    <div className="mt-36 flex h-full min-h-screen w-full flex-col items-center px-4 md:px-24 lg:px-40 ">
      <h1 className="mb-2 text-center text-5xl font-bold text-primary">
        Gallery
      </h1>
      <p>Have a look at some of our best work!</p>
      <div className=" grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {beforeAfterImages.map((beforeAfter) => (
          <div key={beforeAfter.id} className="">
            <Image
              src={"/about-placeholder.png"}
              width={1000}
              height={1000}
              alt="about placeholder"
              className="w-full rounded-md border object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage
