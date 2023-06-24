import ActiveLink from "./activeLink"
import Link from "next/link"
import React from "react"

const TopBar = ({ isClicked, handleClick }) => {
  return (
    <header className="bg-white py-5 lg:py-5 font-inter relative z-30 ">
      <nav className="wrapper">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <a>
                <img
                  src="/images/navbar/logo.svg"
                  alt="Logo"
                  className="w-[80px] lg:w-[142px]"
                />
              </a>
            </Link>
          </li>
          <li className="lg:hidden relative relative z-10">
            {/* hamburger button */}
            <div
              className={isClicked ? "hidden" : "my-auto"}
              onClick={handleClick}
            >
              <img src="images/navbar/bar.svg" alt="menu" width={50} />
            </div>
          </li>
          <div className="hidden lg:flex font-medium">
            <ActiveLink
              className="mx-[36.5px]"
              href="/"
              handleClick={undefined}
              children={"Home"}
            ></ActiveLink>
            <ActiveLink
              className="mx-[36.5px]"
              href="/#about"
              handleClick={undefined}
              children={"About"}
            ></ActiveLink>
            <ActiveLink
              className="mx-[36.5px]"
              href="/#faq"
              handleClick={undefined}
              children={"FAQ"}
            ></ActiveLink>
          </div>
          <li className="hidden lg:flex">
            <a href="">
              <button
                className={[
                  "underlineFromLeft", // css code in global.css
                  "font-bold bg-blue1 w-[172px] h-[70px] rounded-[40px] text-white",
                ].join(" ")}
              >
              Launch App
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default TopBar
