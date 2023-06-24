import React from "react"
import Socials from "../socials"
import Link from "next/link"

const Footer = () => {
  return (
    <footer
      className="bg-black1 py-12 lg:py-[6rem] w-full text-white font-satoshi "
      id="footer"
    >
      <div className="wrapper">
        <ul className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
          <li className="mb-5">
            <div className="flex flex-col ">
              <div>
                <img src="images/navbar/logo.svg" alt="logo" />
              </div>
              <div className="text-lg ">
                &copy;2023 QuatreFinance. All rights reserved.
              </div>
            </div>
          </li>
       
            <div className="mb-2 lg:m-0">
              <Link href="./">Home</Link>{" "}
            </div>
            <div  className="my-2 lg:m-0">
              <Link href="./">About</Link>{" "}
            </div>
            <div  className="mt-2 mb-5 lg:m-0">
              <Link href="./">FAQ</Link>
            </div>
       

          <li>
            <button
              className={[
                "underlineFromLeft", // css code in global.css
                "font-bold bg-blue1 w-[172px] h-[70px] rounded-[40px] text-white",
              ].join(" ")}
            >
              Launch App
            </button>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
