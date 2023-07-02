import React from "react";
import Socials from "../../socials";
import ActiveLink from "./activeLink";
import { useRouter } from "next/router";
import Link from "next/link";

const NavList = ({ isClicked, handleClick, ...props }) => {
  const {currentAccount, connectWallet} = props;
  const router = useRouter();
  return (
    <section className="relative z-30 font-satoshi font-medium ">
      <nav
        className={
          isClicked
            ? "w-full bg-light-grey fixed h-screen top-0 left-0 pl-5"
            : "invisible"
        }
      >
        <ul
          className={
            isClicked ? "wrapper flex flex-col items-start h-full" : "hidden"
          }
        >
          <li className="flex relative py-7 mb-16 ml-auto">
            <div
              className={isClicked ? "ml-auto" : "hidden"}
              onClick={handleClick}
            >
              <img src="images/navbar/close.svg" alt="close menu" width={30} />
            </div>
          </li>
          {/* nav list */}
          <ul className={["flex flex-col text-xl"].join(" ")}>
            <div>
              <ActiveLink
                className="mb-10"
                href="/"
                handleClick={handleClick}
                children={"Home"}
              ></ActiveLink>
              <ActiveLink
                className="mb-10"
                href="/#about"
                handleClick={handleClick}
                children={"About"}
              ></ActiveLink>
              <ActiveLink
                className=""
                href="/#faq"
                handleClick={handleClick}
                children={"FAQ"}
              ></ActiveLink>
            </div>
          </ul>
          <li className="mt-20">
            {router.pathname === "/app" ? (
              <button
                className={[
                  "underlineFromLeft", // css code in global.css
                  "font-bold bg-blue1 w-[170px] h-[50px] text-white rounded-md",
                ].join(" ")}
                onClick={() => {
                  connectWallet();
                }}
              >
                {!!currentAccount
                  ? currentAccount
                      .slice(0, 6)
                      .concat(`...${currentAccount.slice(-4)}`)
                  : "Connect Wallet"}
              </button>
            ) : (
              <Link href="/app">
                <button
                  className={[
                    "underlineFromLeft", // css code in global.css
                    "font-bold bg-blue1 w-[170px] h-[50px] text-white rounded-md",
                  ].join(" ")}
                >
                  Launch App
                </button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default NavList;
