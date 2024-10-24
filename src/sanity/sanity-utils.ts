import { createClient, groq, PortableTextBlock } from "next-sanity"

import clientConfig from "./config/client-config"

export type Stat = {
  _id: string
  createdAt: Date
  currency: string
  number: number
  amount: string
  slug: string
  description: string
  image: string
}

export type Expertise = {
  _id: string
  createdAt: Date
  name: string
  description: string
}

export type Faq = {
  _id: string
  createdAt: Date
  question: string
  answer: string
}

export type AboutHome = {
  _id: string
  createdAt: Date
  title: string
  description: string
  image: string
}
export type StatInfo = {
  _id: string
  createdAt: Date
  title: string
  image: string
}

export type BlogInfo = {
  _id: string
  _createdAt: Date
  title: string
  summary: string
  image: string
  content: string
}

export type SingleBlog = {
  _id: string
  _createdAt: Date
  title: string
  summary: string
  image: string
  content: PortableTextBlock[]
}

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
    { useCdn: true }
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
    { useCdn: true }
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
    { useCdn: true }
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
    { useCdn: true }
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
    { useCdn: true }
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
    { useCdn: true }
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
    { useCdn: true }
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
    { useCdn: true }
  )
}
