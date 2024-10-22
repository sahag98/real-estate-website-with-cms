import React from "react"
import Image from "next/image"
import { getFaqs } from "@/sanity/sanity-utils"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import SectionHeader from "./section-header"

const FAQ = async () => {
  const faqs = await getFaqs()

  return (
    <div
      id="faq"
      className="flex w-full flex-col items-center gap-3 bg-primary/25 px-4 py-12 text-foreground  md:px-10 md:py-24 lg:px-48 lg:py-32"
    >
      <SectionHeader title="FAQ" />
      <p className="text-lg">Here are some frequently asked questions.</p>
      <div className="flex w-full items-center justify-between gap-10">
        <Accordion className="flex-1" type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq._id} value={faq.question}>
              <AccordionTrigger className="text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {/* <Image
          src={"/about-placeholder.png"}
          width={1000}
          height={1000}
          alt="about placeholder"
          className="rounded-md object-cover lg:w-1/3"
        /> */}
      </div>
    </div>
  )
}

export default FAQ
