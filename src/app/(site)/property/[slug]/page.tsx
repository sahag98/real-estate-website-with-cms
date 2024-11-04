// "use client"

// import { useState } from "react"
import Image from "next/image"
import { getSingleProperty } from "@/sanity/sanity-utils"
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
import MessageForm from "@/components/message-form"
import PropertyImages from "@/components/property-images"

import { createMessage } from "./message-action"

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

export default async function PropertyDetail({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const singleProperty = await getSingleProperty(slug)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 pt-32 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="relative mb-8 overflow-hidden rounded-lg">
            <PropertyImages images={singleProperty.images} />
            <Badge className="absolute right-4 top-4 px-3 py-1 md:text-lg">
              {singleProperty.status}
            </Badge>
          </div>
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold">{singleProperty?.title}</h1>
            <p className="mb-4 text-xl text-muted-foreground">
              {singleProperty.address}
            </p>
            <p className="text-3xl font-bold text-primary">
              {singleProperty.amount}
            </p>
          </div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-muted-foreground" />
                <span>{singleProperty.bedrooms} Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-muted-foreground" />
                <span>{singleProperty.bathrooms} Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <CarFront className="h-5 w-5 text-muted-foreground" />
                <span>{singleProperty.parking} Parking Spaces</span>
              </div>
              <div className="flex items-center gap-2">
                <Ruler className="h-5 w-5 text-muted-foreground" />
                <span>{singleProperty.space} sqft</span>
              </div>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{singleProperty.description}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {singleProperty.features.map((feature, index) => (
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
                <p className="text-lg font-semibold text-foreground">
                  Alan Reyes
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground/75">
                  <Phone className="h-4 w-4" />
                  +1 (661) 992-4668
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/75">
                  <Mail className="h-4 w-4" />
                  alan@therise.group
                </div>
              </div>
              <MessageForm slug={slug} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
