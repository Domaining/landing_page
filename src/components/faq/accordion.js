/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import { faqData } from "./data"

const Accordion = ({}) => {
  const [isActive, setActive] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const FAQ = faqData.map((item, i) => {
    const handleClick = () => {
      setActive(!isActive)
      i === item.id ? setActiveIndex(i) : null
    }
    return (
      <article key={item.id} className=" w-12/12 lg:w-10/12 ml-auto">
        <div
          className="flex justify-between bg-light-grey px-8 h-[96px] my-auto cursor-pointer"
          onClick={handleClick}
        >
          <h3 className="text-black1 lg:text-2xl font-satoshiBold font-medium my-auto">
            {item.question}
          </h3>
          <button className="outline-none">
            <img
              src={
                activeIndex === item.id && isActive
                  ? "images/faq/arrow-up.svg"
                  : "images/faq/arrow-down.svg"
              }
              alt="collapse button"
              width="18px"

              // height="9px"
            />
          </button>
        </div>
        {activeIndex === item.id && isActive && (
          <span className="flex items-stretch justify-start">
            <div className="w-4 mr-2 bg-blue1 flex items-stretch"></div>
            <div className={["lg:text-lg text-black1 my-5"].join(" ")}>
              {item.answer}{" "}
            </div>
          </span>
        )}
      </article>
    )
  })

  return <section className="w-full">{FAQ}</section>
}

export default Accordion
