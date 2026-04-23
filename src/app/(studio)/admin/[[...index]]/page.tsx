"use client"

import { NextStudio } from "next-sanity/studio"

import config from "../../../../../sanity.config"

// Embedded Studio must not be statically prerendered; it needs a live client bundle.
export const dynamic = "force-dynamic"

export default function AdminPage() {
  return <NextStudio config={config} />
}
