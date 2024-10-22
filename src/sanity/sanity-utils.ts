import { createClient, groq, PortableTextBlock } from "next-sanity"

import clientConfig from "./config/client-config"

export type Stat = {
  _id: string
  createdAt: Date
  name: string
  slug: string
  description: string
  image: string
}

export async function getStats(): Promise<Stat[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "stat"]{
      _id,
      _createdAt,
      name,
     description
    }`
  )
}
