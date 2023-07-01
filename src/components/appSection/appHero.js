import React from "react";
// @ts-ignore
import NameSearch from "./nameSearch";
const appHero = () => {
  return (
    <section className="relative mb-0 bg-light-grey font-satoshi">
      <div className="wrapper py-16 lg:pt-32 text-white flex flex-col justify-center relative z-10">
        <header className="lg:w-10/12 mx-auto xl:w-8/12">
          <h1
            className={[
              "text-black1 text-[40px] md:text-[60px] xl:text-[64px text-center",
              "font-clash-display font-bold",
              "mt-[2rem] mb-[1rem]",
            ].join(" ")}
          >
            <span className="text-blue1">What should your web3</span>
            <br />
            <span className="text-blue1">space name be?</span>
          </h1>
        </header>

        <p className="text-black1 text-base text-center mx-auto md:w-9/12 xl:w-8/12 1xl:w-7/12 font-meduim mb-16">
          Imagine having a single domain name that covers all your crypto
          addresses and <br />
          <span>decentralise website</span>
        </p>

        <NameSearch />
      </div>
    </section>
  );
};

export default appHero;
