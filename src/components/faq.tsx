import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import SectionHeader from "./section-header"

const FAQ = () => {
  const faqArray = [
    {
      id: 1,
      question: "Question 1",
      answer: "Simple answer to question 1",
    },
    {
      id: 2,
      question: "Question 2",
      answer: "Simple answer to question 2",
    },
    {
      id: 3,
      question: "Question 3",
      answer: "Simple answer to question 3",
    },
    {
      id: 4,
      question: "Question 4",
      answer: "Simple answer to question 4",
    },
    {
      id: 5,
      question: "Question 5",
      answer: "Simple answer to question 5",
    },
  ]
  return (
    <div
      id="faq"
      className="flex w-full flex-col items-center gap-3 bg-primary/25 px-4 py-12 text-foreground  md:px-10 md:py-24 lg:px-48 lg:py-32"
    >
      <SectionHeader title="FAQ" />
      <p className="text-lg">Here are some frequently asked questions.</p>
      <div className="flex w-full items-center justify-between gap-10">
        <Accordion className="flex-1" type="single" collapsible>
          {faqArray.map((faq) => (
            <AccordionItem key={faq.id} value={faq.question}>
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
