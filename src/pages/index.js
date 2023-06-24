import React from "react"
import About from "../components/about/about"
import Hero from "../components/hero/hero"
import Problems from "../components/problems/problems"
import Solutions from "../components/solutions/solutions"
// import SEOHead from "../components/SEOHead/SEOHead"
// import TransparenLayer from "../components/transparentLayer"

const Home = ({ isClicked }) => {
  return (
    <>
      <main className="bg-green1 relative">
        {/* white transparent layer when navbar toggle button is clicked  */}
        {/* <TransparenLayer isClicked={isClicked} /> */}
        <Hero />
      
        {/* <Solutions /> */}
      </main>
    </>
  )
}

export default Home
