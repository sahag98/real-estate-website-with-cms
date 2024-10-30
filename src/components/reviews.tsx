import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Review {
  rating: number
  text: string
  author: {
    name: string
    image: string
  }
}

export default function Component() {
  const reviews: Review[] = [
    {
      rating: 5,
      text: "Exceptional service! This company goes above and beyond to meet their customers' needs. I couldn't be happier with the results.",
      author: {
        name: "Jordan Smith",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      rating: 5,
      text: "Outstanding quality and professionalism. I've been a loyal customer for years and have never been disappointed.",
      author: {
        name: "Taylor Johnson",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      rating: 5,
      text: "Reliable and trustworthy. I highly recommend this business to anyone looking for top-notch products/services.",
      author: {
        name: "Casey Williams",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      rating: 5,
      text: "Impressive attention to detail and excellent communication. Working with this team has been a pleasure.",
      author: {
        name: "Riley Brown",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      rating: 5,
      text: "I can't say enough good things about this company. They consistently deliver excellence and exceed expectations.",
      author: {
        name: "Morgan Davis",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
    {
      rating: 5,
      text: "A true partner in success. This business has played a significant role in our growth and achievements.",
      author: {
        name: "Cameron Miller",
        image: "/placeholder.svg?height=40&width=40",
      },
    },
  ]

  return (
    <section className="w-full bg-[#1c1c1c] py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className=" mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            What My Clients Say
          </h2>
          <p className="text-lg text-primary/75">
            Hear from my satisfied clients who have experienced the quality and
            value of my services.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-sm"
            >
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="flex-1 text-muted-foreground">{review.text}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={review.author.image}
                    alt={review.author.name}
                  />
                  <AvatarFallback>
                    {review.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{review.author.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
