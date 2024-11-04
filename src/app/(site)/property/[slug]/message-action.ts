"use server"

import { revalidatePath } from "next/cache"
import { createSanityMessage } from "@/sanity/sanity-utils"

export async function createMessage(formData: FormData, slug: any) {
  try {
    const message = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    if (!message.name || !message.email || !message.phone || !message.message) {
      throw new Error("Missing required fields")
    }

    // Create the message in Sanity
    await createSanityMessage(message)

    // Revalidate the page to show the new message
    revalidatePath(`/property/${slug}`)
  } catch (error) {
    console.error("Error creating message:", error)
  }
}
