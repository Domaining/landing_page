import React from "react"
// @ts-ignore
import styles from "./hero.module.css"
import Search from "./search"
const Hero = () => {
  return (
    <section className="relative mb-10 bg-light-grey font-satoshi">
      <div className="absolute flex z-0 justify-between w-full top-[-5rem]">
        <img
          src="images/hero/hero-bg1.png"
          alt="background image"
          className=""
        />
        <img
          src="images/hero/hero-bg2.png"
          alt="background image"
          className="hidden lg:flex right-0 absolute"
        />
      </div>
      <div className="wrapper py-16 lg:pt-32 text-white flex flex-col justify-center relative z-10">
        <header className="lg:w-10/12 mx-auto xl:w-8/12">
          <div className="flex mx-auto justify-center items-center h-[38px] w-[291px] rounded-[24px] bg-white text-blue1">
            Join the Decentralization Revolution
          </div>
          <h1
            className={[
              "text-black1 text-[40px] md:text-[60px]  xl:text-[64px text-center",
              "font-clash-display font-bold",
              "",
            ].join(" ")}
          >
            Own Your Digital Identity with{" "}
            <span className="text-blue1">Fantom Blockchain</span>
          </h1>
        </header>
        <p className="text-black1 text-xl lg:text-2xl text-center mx-auto my-8 mb-10 lg:my-10 md:w-9/12 xl:w-8/12 1xl:w-7/12">
          Empower, Secure and Own Your Online Presence with Decentralized
          Domains
        </p>

        <Search />
      </div>
    </section>
  )
}

export default Hero
