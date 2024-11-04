"use client"

import React from "react"
import { useRouter } from "next/navigation"

import { useToast } from "@/hooks/use-toast"
import { createMessage } from "@/app/(site)/property/[slug]/message-action"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const MessageForm = ({ slug }: { slug: any }) => {
  const router = useRouter()
  const formRef = React.useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await createMessage(formData, slug)
        formRef.current?.reset() // Reset all form fields
        toast({
          className: "border border-primary",
          title: "Message sent successfully.",
          description: "I'll be in contact with you shortly!",
        })
      }}
      className="space-y-4"
    >
      <Input
        name="name"
        className="border-foreground/50 placeholder:text-foreground/50"
        placeholder="Your Name"
      />
      <Input
        name="email"
        className="border-foreground/50 placeholder:text-foreground/50"
        placeholder="Your Email"
        type="email"
      />
      <Input
        name="phone"
        className="border-foreground/50 placeholder:text-foreground/50"
        placeholder="Your Phone"
        type="tel"
      />
      <Textarea
        name="message"
        className="resize-none border-foreground/50 placeholder:text-foreground/50"
        placeholder="Your Message"
        rows={4}
      />
      <Button type="submit" className="w-full font-bold">
        Send Message
      </Button>
    </form>
  )
}

export default MessageForm
