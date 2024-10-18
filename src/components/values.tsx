import React from "react"
import {
  CheckCircle,
  HandshakeIcon,
  LeafIcon,
  ThumbsUpIcon,
} from "lucide-react"

const Values = () => {
  return (
    <section className="w-full bg-primary/25 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Values
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4 bg-secondary p-5">
            <CheckCircle className="h-12 w-12 text-primary" />
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Transparency</h3>
              <p className="text-lg ">
                I provide honest, transparent communication at every stage,
                ensuring you stay informed throughout the process.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 bg-secondary p-5">
            <HandshakeIcon className="h-12 w-12 text-primary" />

            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Client-Centered</h3>
              <p className="text-lg">
                Your goals come first. I tailor my services to fit your needs,
                offering personalized guidance whether buying or selling.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 bg-secondary p-5">
            <ThumbsUpIcon className="h-12 w-12 text-primary" />
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold">Excellence</h3>
              <p className="text-lg">
                With strong market knowledge, I work to get you the best deal,
                whether buying your home or selling your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
