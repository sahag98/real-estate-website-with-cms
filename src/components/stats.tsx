import Image from "next/image"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Stats() {
  return (
    <div className="container mx-auto px-4 py-20 md:pt-32">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tighter sm:text-5xl">
        Delivering Smart Real Estate Solutions
      </h2>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold">
              $10M+
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center uppercase">Amount of Property Sold</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold">73</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center uppercase">Deals Sold/Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-4xl font-bold">
              100+
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center uppercase">Happy Clients</p>
          </CardContent>
        </Card>
      </div>
      <div className="relative h-96 w-full">
        <Image
          src="/about-cta.jpg"
          alt="Modern kitchen interior"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
