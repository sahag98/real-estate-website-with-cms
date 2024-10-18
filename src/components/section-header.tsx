import React from "react"

type SectionHeaderType = {
  title: string
}

const SectionHeader = ({ title }: SectionHeaderType) => {
  return <h3 className="z-10 text-5xl font-bold">{title}</h3>
}

export default SectionHeader
