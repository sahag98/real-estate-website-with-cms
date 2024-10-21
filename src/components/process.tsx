import React from "react"
import {
  CheckCheckIcon,
  ClipboardIcon,
  HandshakeIcon,
  LeafIcon,
  ThumbsUpIcon,
  WrenchIcon,
} from "lucide-react"

const Process = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Proven Process
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I follow a structured approach to ensure a smooth experience for
              both first-time buyers and sellers, guiding you every step of the
              way.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <ClipboardIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-2xl font-bold">Consultation</h3>
              <p className="text-muted-foreground md:text-lg">
                I begin by understanding your unique needs and preferences,
                ensuring we find the perfect property or buyer that fits your
                goals.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <WrenchIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-2xl font-bold">Execution</h3>
              <p className="text-muted-foreground md:text-lg">
                Using my expertise and market insights, I execute a well-planned
                strategy to secure the best deals for buying or selling your
                home.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4">
            <CheckCheckIcon className="h-12 w-12 text-primary" />
            <div className="space-y-1 text-center">
              <h3 className="text-2xl font-bold">Support</h3>
              <p className="text-muted-foreground md:text-lg">
                I offer ongoing support and expert advice, ensuring you&apos;re
                confident and informed throughout the entire real estate
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
