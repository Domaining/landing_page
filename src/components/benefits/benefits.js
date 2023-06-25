import React from "react";
import SectionBody from "../sectionBody";
import SectionHeader from "../sectionHeader";
import { benefitsData } from "./data";

const Benefits = () => {
  return (
    <section className="text-left">
      {benefitsData.map((data) => (
        // @ts-ignore
        <div key={data.id}>
          <div className="bg-light-grey py-10 lg:py-20">
            <section className="wrapper">
              <SectionHeader
                sectionTitle={data.sectionTitle}
                subTitle={undefined}
              />
              <SectionBody
                paragraph1={data.paragraph1}
                paragraph2={data.paragraph2}
                paragraph3={data.paragraph3}
                paragraph4={data.paragraph4}
                sectionImage={data.sectionImage}
                sectionName={data.sectionName}
                flexRow={undefined}
                flexRowReverse={data.flexRowReverse}
                subTitle={undefined}
              />
            </section>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
