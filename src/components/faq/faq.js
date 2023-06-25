import React from "react"
import Accordion from "./accordion"
import { pageData } from "./data"
import SectionHeader from "../sectionHeader"
import SectionBody from "../sectionBody"

const Faq = () => {
  return (
    <section className="text-left" id="faq">
      {pageData.map((data) => (
        // @ts-ignore
        <div key={data.id}>
          <div className="bg-light-white py-10 lg:py-20">
            {" "}
            <section className="wrapper">
              <SectionHeader
                sectionTitle={data.sectionTitle}
                subTitle={undefined}
              />
              <div className="flex flex-col lg:flex-row">
                <div className="mb-10 lg:mb-0 md:w-9/12  mr-auto">
                  <img
                    src={data.sectionImage}
                    alt={data.sectionName}
                    className="w-full"
                  />
                </div>
                <Accordion />
              </div>
            </section>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Faq
