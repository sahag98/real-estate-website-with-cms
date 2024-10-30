import { getReviews } from "@/sanity/sanity-utils"
import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function Component() {
  const reviews = await getReviews()

  console.log(reviews)

  return (
    <section className="w-full bg-[#1c1c1c] py-12 md:py-24 lg:py-32">
      <div className="px-4 md:container">
        <div className=" mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            What My Clients Say
          </h2>
          <p className="text-lg text-primary/75">
            Hear from my satisfied clients who have experienced the quality and
            value of my services.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg bg-background p-6 shadow-sm"
            >
              <div className="flex gap-1">
                {Array(5)
                  .fill(5)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
              </div>
              <p className="flex-1 text-foreground/75">{review.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  {/* <AvatarImage
                    src={"/placeholder.svg?height=40&width=40"}
                    alt={review.name}
                  /> */}
                  <AvatarFallback className="bg-primary">
                    <span className="text-back font-semibold text-primary-foreground">
                      {review.name.charAt(0)}
                    </span>
                  </AvatarFallback>
                  {/* <AvatarFallback>{review.name}</AvatarFallback> */}
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">
                    {review.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
