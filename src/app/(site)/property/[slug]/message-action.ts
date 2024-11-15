"use server"

import { revalidatePath } from "next/cache"
import { createSanityMessage } from "@/sanity/sanity-utils"
import message from "@/sanity/schemas/message-schema"
import { Resend } from "resend"

import { EmailTemplate } from "@/components/email-template"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function createMessage(
  formData: FormData,
  slug: string,
  name: string
) {
  try {
    const newMessage = {
      propertyName: name,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    if (
      !newMessage.name ||
      !newMessage.email ||
      !newMessage.phone ||
      !newMessage.message
    ) {
      throw new Error("Missing required fields")
    }

    const { data, error } = await resend.emails.send({
      from: `Website <alan@alanreyesrealty.com>`,
      to: ["alan@therise.group"],
      subject: "New Message for Property",
      react: EmailTemplate({
        name: newMessage.name,
        phone: newMessage.phone,
        email: newMessage.email,
        property: name,
        message: newMessage.message,
      }),
    })

    if (error) {
      console.log("resend error: ", error)
    }

    // Create the message in Sanity
    await createSanityMessage(newMessage)

    // Revalidate the page to show the new message
    revalidatePath(`/property/${slug}`)
  } catch (error) {
    console.error("Error creating message:", error)
  }
}
