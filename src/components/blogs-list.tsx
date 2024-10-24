"use client"

import React, { useMemo, useState } from "react"
import Image from "next/image"
import { BlogInfo } from "@/sanity/sanity-utils"
import { Search } from "lucide-react"
import moment from "moment"
import { Link } from "next-view-transitions"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

const BlogsList = ({ blogs }: { blogs: BlogInfo[] }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBlogs = useMemo(() => {
    if (!searchTerm) return blogs

    const lowercasedTerm = searchTerm.toLowerCase()
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(lowercasedTerm)
    )
  }, [blogs, searchTerm])

  const exactMatch = useMemo(() => {
    if (!searchTerm) return null
    return filteredBlogs.find(
      (blog) => blog.title.toLowerCase() === searchTerm.toLowerCase()
    )
  }, [filteredBlogs, searchTerm])

  const renderBlogCard = (blog: BlogInfo) => (
    <Card key={blog._id} className="flex flex-col rounded-none">
      <CardHeader className="p-0">
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="h-56 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="flex-grow p-3">
        <CardTitle className="mb-2 text-xl text-foreground md:text-2xl">
          {blog.title}
        </CardTitle>
        <p className="mb-4 font-medium text-foreground/85">{blog.summary}</p>
      </CardContent>
      <CardFooter className="flex items-end justify-between p-3 pt-0">
        <Button asChild>
          <Link href={`/blog/${blog._id}`}>Read More</Link>
        </Button>
        <p className="text-sm ">{moment(blog._createdAt).fromNow()}</p>
      </CardFooter>
    </Card>
  )

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="relative w-full max-w-xl">
          <Input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles by their title..."
            className="pr-10 text-foreground placeholder:text-foreground/70"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-muted-foreground" />
        </div>
      </div>
      {searchTerm && filteredBlogs.length === 0 ? (
        <div className="text-center text-foreground/70">
          No blogs found matching your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exactMatch
            ? renderBlogCard(exactMatch)
            : filteredBlogs.slice(0, 6).map(renderBlogCard)}
        </div>
      )}
      {blogs.length > 3 && (
        <Pagination className="mt-7">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  )
}

export default BlogsList
