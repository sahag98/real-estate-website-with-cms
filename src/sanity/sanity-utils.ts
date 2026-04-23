import { createClient, groq } from "next-sanity"

import clientConfig from "./config/client-config"
import {
  AboutHome,
  BlogInfo,
  Expertise,
  Faq,
  Properties,
  Reviews,
  SingleBlog,
  Stat,
  StatInfo,
  SuccessStories,
} from "./types"

export async function getStats(): Promise<Stat[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "stat"]| order(_createdAt asc){
      _id,
      _createdAt,
      currency,
      number,
      amount,
     description
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getExpertise(): Promise<Expertise[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "expertise"]| order(_createdAt desc){
      _id,
      _createdAt,
      name,
     description
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getFaqs(): Promise<Faq[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "faq"]| order(_createdAt asc){
      _id,
      _createdAt,
      question,
     answer,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getAboutHome(): Promise<AboutHome[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "abouthome"]{
      _id,
      _createdAt,
      title,
     "image": image.asset->url,
     description,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getAboutDescription(): Promise<any[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "aboutdescription"]{
      _id,
      _createdAt,
     "image": image.asset->url,
     description,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getHeroImg(): Promise<{ _id: string; image: string }[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "hero"]{
      _id,
     "image": image.asset->url,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getStatInfo(): Promise<StatInfo[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "statinfo"]{
      _id,
      _createdAt,
      title,
     "image": image.asset->url,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getBlogs(): Promise<BlogInfo[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]| order(_createdAt desc){
      _id,
      _createdAt,
      title,
      summary,
     "image": image.asset->url,
      content
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getBlogBySearch(
  title: string
): Promise<SingleBlog | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && title == $title][0]{
      _id,
      _createdAt,
      title,
      summary,
      "image": image.asset->url,
      content
    }`,
    { title },
    { cache: "no-store" }
  )
}

export async function getSingleBlog(id: string): Promise<SingleBlog | null> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog" && _id == $id][0]{
      _id,
      _createdAt,
      title,
      summary,
      "image": image.asset->url,
      content
    }`,
    { id },
    { cache: "no-store" }
  )
}

export async function getSuccessStories(): Promise<SuccessStories[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "success"]{
      _id,
      _createdAt,
      title,
      "image": image.asset->url,
      "video": video.asset->url,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getReviews(): Promise<Reviews[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "review"]{
      _id,
      _createdAt,
      name,
      content,
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getProperties(): Promise<Properties[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "property"]{
      _id,
      _createdAt,
      title,
     images[]{
        "url": asset->url,
        alt
      },
      amount,
      address,
      "slug":slug.current,
      description,
      status,
      bedrooms,
      bathrooms,
      parking,
      space,
      features
    }`,
    {},
    { cache: "no-store" }
  )
}

export async function getSingleProperty(slug: string): Promise<Properties> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "property" && slug.current == $slug][0]{
       _id,
      _createdAt,
      title,
     images[]{
        "url": asset->url,
        alt
      },
      amount,
      address,
      "slug":slug.current,
      description,
      status,
      bedrooms,
      bathrooms,
      parking,
      space,
      features
    }`,
    { slug },
    { cache: "no-store" }
  )
}

export async function createSanityMessage(message: {
  propertyName: string
  name: string
  email: string
  phone: string
  message: string
}) {
  return createClient(clientConfig).create({
    _type: "message",
    propertyName: message.propertyName,
    name: message.name,
    email: message.email,
    phone: message.phone,
    message: message.message,
  })
}
