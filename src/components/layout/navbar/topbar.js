import ActiveLink from "./activeLink";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const TopBar = ({ isClicked, handleClick }) => {
  const router = useRouter();
  const [currentAccount, setCurrentAccount] = useState("");
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask -> https://metamask.io/");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(`Current Account => `, currentAccount);
  return (
    <header className="bg-white py-5 lg:py-5 font-satoshiBold relative z-30 ">
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
          {router.pathname === "/app" ? (
            <li className="hidden lg:flex">
              <button
                className={[
                  "underlineFromLeft", // css code in global.css
                  "font-bold bg-blue1 w-[172px] h-[70px] rounded-[40px] text-white",
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
            </li>
          ) : (
            <li className="hidden lg:flex">
              <Link href="/app">
                <button
                  className={[
                    "underlineFromLeft", // css code in global.css
                    "font-bold bg-blue1 w-[172px] h-[70px] rounded-[40px] text-white",
                  ].join(" ")}
                >
                  Launch App
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default TopBar;
