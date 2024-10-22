import Image from "next/image"
import { getStatInfo, Stat } from "@/sanity/sanity-utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import NumberTicker from "./ui/number-ticker"

export default async function Stats({ stats }: { stats: Stat[] }) {
  console.log("stat: ", stats)

  const statInfo = await getStatInfo()

  return (
    <div className="container mx-auto px-4 py-20 md:pt-32">
      <h2 className="mb-8 text-center text-3xl font-semibold tracking-tighter sm:text-5xl">
        {statInfo[0]?.title}
      </h2>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {stats.map((stat) => (
          <Card key={stat._id}>
            <CardHeader>
              <CardTitle className="text-center text-4xl font-bold">
                {stat.currency}
                <NumberTicker value={stat.number} />
                {stat.amount}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center uppercase">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="relative h-96 w-full">
        <Image
          src={statInfo[0]?.image}
          alt={statInfo[0]?.title}
          // width={6000}
          // height={4000}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
