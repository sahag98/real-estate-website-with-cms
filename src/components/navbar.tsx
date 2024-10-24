"use client"

import React, { useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Link } from "next-view-transitions"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const pathname = usePathname()

  console.log(pathname)
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="fixed top-0 z-20 w-full border-b bg-background">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-3">
        <Link href={"/"}>
          <Image
            src={siteConfig.logo}
            width={492}
            className="w-24 md:w-44"
            height={248}
            priority
            alt="dougs tractor works logo"
          />
        </Link>
        <button
          onClick={() => setNavOpen((prev) => !prev)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inLinkne-flex focus:outLinkne-none h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={cn(
            navOpen ? "block w-full" : "hidden w-full md:block md:w-auto"
          )}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col space-y-10 rounded-lg border  md:mt-0 md:flex-row md:space-x-10 md:space-y-0 md:border-0 md:p-0  rtl:space-x-reverse">
            <Link
              className={cn(pathname === "/" && " font-semibold text-primary")}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={cn(
                pathname === "/about" && " font-semibold text-primary"
              )}
              href={"/about"}
            >
              About
            </Link>
            <Link href={"/#expertise"}>Expertise</Link>
            <Link
              className={cn(
                pathname === "/blog" && " font-semibold text-primary"
              )}
              href={"/blog"}
            >
              Blog
            </Link>
            {/* <Link
              className={cn(
                pathname === "/gallery" && " font-semibold text-primary"
              )}
              href={"/gallery"}
            >
              Gallery
            </Link> */}
            <Link href={"/#faq"}>FAQ</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
