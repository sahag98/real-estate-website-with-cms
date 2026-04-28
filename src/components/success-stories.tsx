import Image from "next/image"
import { getSuccessStories } from "@/sanity/sanity-utils"

import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import VideoDialog from "./video-dialog"

export default async function PropertySuccessStories() {
  const stories = await getSuccessStories()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="fade-in text-3xl font-bold tracking-tighter sm:text-5xl">
            Property Success Stories
          </h2>
          <p className="fade-in fade-in-delay-1 max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how we&apos;ve helped our clients find their dream homes,
            make smart investments, and transform properties.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {stories
            .filter((story) => story.title?.trim() && story.video?.trim())
            .map((story, index) => (
              <Card
              key={index}
                className={`fade-in mx-auto w-full max-w-sm overflow-hidden ${
                index % 4 === 1
                  ? "fade-in-delay-1"
                  : index % 4 === 2
                    ? "fade-in-delay-2"
                    : index % 4 === 3
                      ? "fade-in-delay-3"
                      : ""
              }`}
              >
                {story.image?.trim() ? (
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={400}
                    height={500}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[4/5] w-full bg-muted" aria-hidden="true" />
                )}
                <CardHeader className="px-2 py-3">
                  <CardTitle className="text-foreground">{story.title}</CardTitle>
                </CardHeader>
                <CardFooter className="px-2 py-3">
                  <VideoDialog video={story.video} />
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
