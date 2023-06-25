import React from "react"

const SectionBody = ({
  sectionImage,
  sectionName,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  flexRow,
  flexRowReverse,
  subTitle
}) => {
  return (
    <div
      className={[
        "flex flex-col mt-10 items-center w-full ",
        flexRow,
        flexRowReverse,
      ].join(" ")}
    >
      <img
        src={sectionImage}
        alt={sectionName}
        className="mb-10 lg:mb-0 md:w-9/12 lg:w-6/12 mr-auto"
      />
      <div className="flex flex-col md:w-8/12 lg:w-5/12 text-left mr-auto font-satoshi lg:text-lg lg:text-left lg:mx-auto">
        {subTitle}
        {paragraph1}
        {paragraph2}
        {paragraph3}
        {paragraph4}
      </div>
    </div>
  )
}

export default SectionBody
