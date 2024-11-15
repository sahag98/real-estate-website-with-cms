import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components"

export const EmailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string
  email: string
  phone: string
  message: string
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Message for Property Listing</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] bg-[#FAFAFA] p-[20px]">
            <Heading className="mx-0 my-[10px] p-0 text-center text-[28px] font-bold text-black">
              New Message for Property Listing
            </Heading>
            <Text>Email: {email}</Text>
            <Text>Name: {name}</Text>
            <Text>Phone number: {phone}</Text>
            <Text>Message: {message}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
