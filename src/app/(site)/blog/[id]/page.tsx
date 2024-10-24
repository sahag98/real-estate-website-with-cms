import React from "react"
import Image from "next/image"
import { getSingleBlog } from "@/sanity/sanity-utils"
// import { PortableText } from "@portabletext/react"
import moment from "moment"
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity"

const SingleBlogPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const blog = await getSingleBlog(id)
  return (
    <div className=" mx-auto min-h-screen max-w-5xl px-4 pt-20 md:pt-28">
      <Image
        src={blog?.image || ""}
        alt={blog?.title || ""}
        width={1000}
        height={1000}
        className="mb-5 h-72 w-full object-cover md:h-96"
      />
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold md:text-4xl">{blog?.title}</h1>
        <span>{moment(blog?._createdAt).fromNow()}</span>
      </div>
      {blog?.content?.length && (
        <div className="mt-5 text-lg">
          {/* <PortableText value={blog.content} /> */}
          <CustomPortableText value={blog.content as PortableTextBlock[]} />
        </div>
      )}
    </div>
  )
}

export default SingleBlogPage

function CustomPortableText({
  className,
  value,
}: {
  className?: string
  value: PortableTextBlock[]
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">{children}</h1>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <div className={["prose", className].filter(Boolean).join(" ")}>
      <PortableText components={components} value={value} />
    </div>
  )
}
