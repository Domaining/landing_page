// Page Layout
import NavBar from "./navbar/navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";
import ScrollButton from "./scrollButton";
import Spinner from "../spinner";
import React from "react";
// Navbar and Footer Component

const Layout = ({ handleClick, isClicked, children }) => {
  const [loading, setLoading] = useState(true);
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

  const windowIsDefined = typeof window !== "undefined";
  useEffect(() => {
    if (windowIsDefined) {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="relative">
      <section
        className={[
          "fixed h-screen w-full flex justify-center items-center bg-black1 z-50",
          !loading && "hidden",
        ].join(" ")}
      >
        <Spinner size={40} color={"white"} />
      </section>

      <main className="relative">
        <ScrollButton windowIsDefined={windowIsDefined} />
        <NavBar
          handleClick={handleClick}
          isClicked={isClicked}
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          connectWallet={connectWallet}
        />
        {/* {children} */}
        {React.Children.map(children, (child) => {
          // Pass default props to children
          return React.cloneElement(child, {
            currentAccount,
            setCurrentAccount,
            connectWallet,
            ...child.props,
          });
        })}
        <Footer
          currentAccount={currentAccount}
          setCurrentAccount={setCurrentAccount}
          connectWallet={connectWallet}
        />
      </main>
    </div>
  );
};

export default Layout;
