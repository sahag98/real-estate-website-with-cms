"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface BlurIntProps {
  word: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
}
const BlurInButton = ({
  word,
  className,
  variant,
  duration = 1,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "flex h-10 items-center justify-center bg-primary px-4 py-2 text-center text-lg font-bold text-primary-foreground drop-shadow-sm",
        className
      )}
    >
      {word}
    </motion.button>
  )
}

export default BlurInButton
