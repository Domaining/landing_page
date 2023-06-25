import React from "react"
import About from "../components/about/about"
import Hero from "../components/hero/hero"
import Benefits from "../components/benefits/benefits"
import Faq from "../components/faq/faq"

const Home = ({}) => {
  return (
    <>
      <main className="bg-green1 relative">
        <Hero />
        <About />
        <Benefits />
        <Faq />
      </main>
    </>
  )
}

export default Home
