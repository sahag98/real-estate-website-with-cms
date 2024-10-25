import { createClient, groq, PortableTextBlock } from "next-sanity"

import clientConfig from "./config/client-config"
import {
  AboutHome,
  BlogInfo,
  Expertise,
  Faq,
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
    { useCdn: true }
  )
}
