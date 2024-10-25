import Image from "next/image"
import { getSuccessStories } from "@/sanity/sanity-utils"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"
import VideoDialog from "./video-dialog"

export default async function PropertySuccessStories() {
  const stories = await getSuccessStories()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Property Success Stories
          </h2>
          <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how we've helped our clients find their dream homes, make
            smart investments, and transform properties.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={story.image}
                alt={story.title}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
              <CardHeader className="px-2 py-3">
                <CardTitle className="text-foreground">{story.title}</CardTitle>
              </CardHeader>
              <CardFooter className="px-2 py-3">
                <VideoDialog video={story.video} />
                {/* <Button>Watch Video</Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
