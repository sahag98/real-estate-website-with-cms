import { PortableTextBlock } from "next-sanity"

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

export type SuccessStories = {
  _id: string
  _createdAt: Date
  title: string
  image: string
  video: string
}
