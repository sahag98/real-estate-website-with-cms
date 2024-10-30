"use client"

import { useState } from "react"
import {
  Bath,
  Bed,
  CarFront,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Ruler,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Property {
  id: number
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  carSpaces: number
  area: number
  description: string
  features: string[]
  images: string[]
  status: "For Sale" | "For Rent"
  agent: {
    name: string
    phone: string
    email: string
  }
}

export default function PropertyDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const property: Property = {
    id: 1,
    title: "Luxurious Waterfront Villa",
    price: 2500000,
    location: "123 Oceanview Drive, Coastal City, State 12345",
    bedrooms: 5,
    bathrooms: 4,
    carSpaces: 3,
    area: 4500,
    description:
      "Experience the epitome of luxury living in this stunning waterfront villa. Boasting breathtaking ocean views from every room, this architectural masterpiece seamlessly blends indoor and outdoor living. The open-concept design, high-end finishes, and state-of-the-art smart home features create an unparalleled living experience. Enjoy your private infinity pool, direct beach access, and a gourmet kitchen that will inspire your inner chef. This property is not just a home; it's a lifestyle.",
    features: [
      "Infinity pool with ocean view",
      "Smart home technology",
      "Gourmet kitchen with high-end appliances",
      "Home theater",
      "Wine cellar",
      "Fitness room",
      "Outdoor kitchen and entertainment area",
      "Direct beach access",
      "Solar panels",
      "Electric car charging station",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    status: "For Sale",
    agent: {
      name: "Alex Johnson",
      phone: "+1 (555) 123-4567",
      email: "alex.johnson@realestate.com",
    },
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative mb-8 overflow-hidden rounded-lg">
            <img
              src={property.images[currentImageIndex]}
              alt={`Property image ${currentImageIndex + 1}`}
              className="h-[400px] w-full object-cover sm:h-[500px]"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 transform"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 transform"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <Badge className="absolute right-4 top-4 px-3 py-1 text-lg">
              {property.status}
            </Badge>
          </div>
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">{property.title}</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              {property.location}
            </p>
            <p className="text-3xl font-bold text-primary">
              ${property.price.toLocaleString()}
            </p>
          </div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span>{property.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>{property.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <CarFront className="h-5 w-5 text-muted-foreground" />
                <span>{property.carSpaces} Parking Spaces</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-muted-foreground" />
                <span>{property.area} sqft</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{property.description}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="sticky top-32">
            <CardHeader>
              <CardTitle className="text-foreground">Contact Agent</CardTitle>
              <CardDescription className="text-foreground/75">
                Interested in this property? Get in touch!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="font-semibold text-foreground">Alan Reyes</p>
                <div className="flex items-center gap-2 text-sm text-foreground/75">
                  <Phone className="h-4 w-4" />
                  +1 (661) 992-4668
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/75">
                  <Mail className="h-4 w-4" />
                  alan@therise.group
                </div>
              </div>
              <form className="space-y-4">
                <Input
                  className="border-foreground/50 placeholder:text-foreground/50"
                  placeholder="Your Name"
                />
                <Input
                  className="border-foreground/50 placeholder:text-foreground/50"
                  placeholder="Your Email"
                  type="email"
                />
                <Input
                  className="border-foreground/50 placeholder:text-foreground/50"
                  placeholder="Your Phone"
                  type="tel"
                />
                <Textarea
                  className="resize-none border-foreground/50 placeholder:text-foreground/50"
                  placeholder="Your Message"
                  rows={4}
                />
                <Button className="w-full font-bold">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
