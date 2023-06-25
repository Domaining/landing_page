// @ts-nocheck
import React from "react";
import SectionBody from "../sectionBody";
import SectionHeader from "../sectionHeader";
import { aboutData } from "./data";

const About = () => {
  return (
    <section className="wrapper text-left" id="about">
      {aboutData.map((data) => (
        <div key={data.id} className="py-10 lg:py-20">
          <SectionHeader sectionTitle={data.sectionTitle} />
          <SectionBody
            subTitle={data.subTitle}
            paragraph1={data.paragraph1}
            paragraph2={data.paragraph2}
            sectionImage={data.sectionImage}
            sectionName={data.sectionName}
            flexRow={data.flexRow}
          />
        </div>
      ))}
    </section>
  );
};

export default About;
