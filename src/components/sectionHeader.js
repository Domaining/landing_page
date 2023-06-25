import React from "react"

const SectionHeader = ({ sectionTitle, subTitle }) => {
  return (
    <header>
      <h2 className="font-clash-display text-blue1 text-[40px] mb-2 before:border-l-4  before:mr-2 before:border-blue1">
        {sectionTitle}
      </h2>
    </header>
  )
}

export default SectionHeader
