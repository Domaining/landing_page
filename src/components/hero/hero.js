import React from "react";
// @ts-ignore
import Search from "./search";
const Hero = () => {
  return (
    <section className="relative mb-10 bg-light-grey font-satoshi">
      <div className="flex z-0 justify-between w-full ">
        <img
          src="images/hero/hero-bg1.png"
          alt="background image"
          className="lg:bottom-[4rem] absolute "
        />
        <img
          src="images/hero/hero-bg2.png"
          alt="background image"
          className="hidden lg:flex right-0 absolute"
        />
      </div>

      <div className="wrapper py-16 lg:pt-32 text-white flex flex-col justify-center relative z-10">
        <header className="lg:w-10/12 mx-auto xl:w-8/12">
          <div className="flex mx-auto justify-center items-center h-[38px] w-[291px] rounded-[24px] bg-white text-blue1 text-base">
            Join the Decentralization Revolution
          </div>
          <h1
            className={[
              "text-black1 text-[40px] md:text-[60px] xl:text-[64px text-center",
              "font-clash-display font-bold",
              "mt-[2rem] mb-[1rem]",
            ].join(" ")}
          >
            Own Your Digital Identity with{" "}
            <span className="text-blue1">Fantom Blockchain</span>
          </h1>
        </header>

        <p className="text-black1 text-base text-center mx-auto md:w-9/12 xl:w-8/12 1xl:w-7/12 font-meduim mb-16">
          Empower, Secure and Own Your Online Presence with Decentralized
          Domains
        </p>

        <Search />
      </div>
    </section>
  );
};

export default Hero;
