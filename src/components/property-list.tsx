import Image from "next/image"
import Link from "next/link"
import { getProperties } from "@/sanity/sanity-utils"
import { Bath, Bed, CarFront, Ruler } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { Button } from "./ui/button"

export default async function PropertyListings() {
  const properties = await getProperties()

  return (
    <section id="properties" className=" px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card
              key={property._id}
              className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <Image
                    className="h-64 w-full object-cover"
                    src={property.images[0].url}
                    alt={property.images[0]?.alt}
                    width={256}
                    height={256}
                  />
                  {/* <img
                    src={property.images}
                    alt={property.title}
                    className="h-64 w-full object-cover"
                  /> */}
                  <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground">
                    {property.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {property.title}
                </h3>
                <p className="mb-4 text-2xl font-bold text-primary">
                  {property.status === "For Sale"
                    ? property.amount
                    : `${property.amount}/month`}
                </p>
                <p className="mb-4 text-foreground/75">{property.address}</p>
                <div className="flex justify-between text-foreground/60">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CarFront className="h-4 w-4" />
                    <span>{property.parking}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span>{property.space} sqft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link
                  className="w-full"
                  href={`/property/${property.slug}?name=${property.title}`}
                >
                  <Button className="w-full rounded-md bg-primary py-2 text-base font-bold text-primary-foreground transition-colors duration-300 hover:bg-background hover:text-foreground">
                    View Property
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
