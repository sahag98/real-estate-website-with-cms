import Link from "next/link"
import { Bath, Bed, CarFront, Ruler } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { Button } from "./ui/button"

interface Property {
  id: number
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  carSpaces: number
  area: number
  image: string
  status: "For Sale" | "For Rent"
}

export default function PropertyListings() {
  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 450000,
      location: "123 City Center, Metropolis",
      bedrooms: 2,
      bathrooms: 2,
      carSpaces: 1,
      area: 1200,
      image: "/placeholder.svg?height=400&width=600",
      status: "For Sale",
    },
    {
      id: 2,
      title: "Suburban Family Home",
      price: 350000,
      location: "456 Maple Street, Suburbia",
      bedrooms: 4,
      bathrooms: 3,
      carSpaces: 2,
      area: 2500,
      image: "/placeholder.svg?height=400&width=600",
      status: "For Sale",
    },
    {
      id: 3,
      title: "Cozy Studio in Arts District",
      price: 1500,
      location: "789 Artisan Alley, Creativetown",
      bedrooms: 1,
      bathrooms: 1,
      carSpaces: 0,
      area: 600,
      image: "/placeholder.svg?height=400&width=600",
      status: "For Rent",
    },
    {
      id: 4,
      title: "Luxury Penthouse with City Views",
      price: 1200000,
      location: "1010 Skyline Avenue, Metropolis",
      bedrooms: 3,
      bathrooms: 3,
      carSpaces: 2,
      area: 3000,
      image: "/placeholder.svg?height=400&width=600",
      status: "For Sale",
    },
    {
      id: 5,
      title: "Charming Cottage near Lake",
      price: 2200,
      location: "222 Lakeview Drive, Serenity",
      bedrooms: 2,
      bathrooms: 1,
      carSpaces: 1,
      area: 1000,
      image: "/placeholder.svg?height=400&width=600",
      status: "For Rent",
    },
    {
      id: 6,
      title: "Modern Townhouse",
      price: 550000,
      location: "333 Secure Lane, Safehaven",
      bedrooms: 3,
      bathrooms: 2,
      carSpaces: 2,
      area: 1800,
      image: "/placeholder.svg?height=400&width=600",
      status: "For Sale",
    },
  ]

  return (
    <section className=" px-4 py-24 md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-64 w-full object-cover"
                  />
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
                  $
                  {property.status === "For Sale"
                    ? property.price.toLocaleString()
                    : `${property.price.toLocaleString()}/month`}
                </p>
                <p className="mb-4 text-foreground/75">{property.location}</p>
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
                    <span>{property.carSpaces}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span>{property.area} sqft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link className="w-full" href={"/property/1"}>
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
