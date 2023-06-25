import React from "react";

export const aboutData = [
  {
    id: 0,
    sectionTitle: "About",
    subTitle: (
      <h2 className="mb-5 font-clash-displaySemi text-[26px]">
        Introducing <span className="text-blue1">Namee3 </span> Your Fatom Name
        Service Protocol
      </h2>
    ),
    paragraph1: (
      <p className="mb-5">
        Namee3 Name Service Protocol is a decentralized, open, and extensible
        naming system that maps human-readable names to machine-readable
        identifiers on the blockchain. This makes it possible to easily access
        and interact with blockchain-based applications and services using
        simple, memorable names.
      </p>
    ),
    paragraph2: (
      <p className="">
        Our platform leverages the power of blockchain technology to ensure that
        your domain is truly yours. By registering your domain on the Fantom
        blockchain, you gain complete ownership and control, eliminating the
        need to rely on intermediaries or worry about your domain being seized
        or censored.
      </p>
    ),
    sectionImage: "images/about/about.svg",
    sectionName: "About us",
    flexRow: "lg:flex-row",
    flexRowReverse: "lg:flex-row-reverse",
  },
];
