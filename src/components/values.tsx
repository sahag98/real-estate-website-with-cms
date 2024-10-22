import React from "react"
import {
  CheckCircle,
  HandshakeIcon,
  LeafIcon,
  ThumbsUpIcon,
} from "lucide-react"

const Values = () => {
  const values = [
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Transparency",
      description:
        "I provide transparent communication at every stage, ensuring you stay informed throughout the process.",
    },
    {
      icon: <HandshakeIcon className="h-12 w-12 text-primary" />,
      title: "Client-Centered",
      description:
        "Your goals come first. I tailor my services to fit your needs, offering personalized guidance whether buying or selling.",
    },
    {
      icon: <ThumbsUpIcon className="h-12 w-12 text-primary" />,
      title: "Excellence",
      description:
        "With strong market knowledge, I work to get you the best deal, whether buying your home or selling your property.",
    },
  ]
  return (
    <section className="w-full bg-[#1c1c1c] py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Values
            </h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-lg bg-background p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="mb-3 text-center text-xl font-bold text-foreground md:text-2xl">
                {value.title}
              </h3>
              <p className="text-center text-foreground/50 md:text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
