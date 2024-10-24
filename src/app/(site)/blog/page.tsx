import Image from "next/image"
import Link from "next/link"
import { getBlogBySearch, getBlogs } from "@/sanity/sanity-utils"
import { Search } from "lucide-react"
import moment from "moment"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import BlogsList from "@/components/blogs-list"

export default async function BlogPage() {
  const blogs = await getBlogs()

  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <header className="pt-28 text-center">
        <h1 className="mb-4 text-4xl font-bold">Real Estate Insights</h1>
        <p className="mb-4 text-xl text-foreground/70">
          Stay informed with the latest trends and tips in the real estate
          market
        </p>
      </header>
      <BlogsList blogs={blogs} />
    </div>
  )
}
