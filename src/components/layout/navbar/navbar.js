import TopBar from "./topbar";
import NavList from "./navList";
import React from "react";

const NavBar = ({ handleClick, isClicked, ...props }) => {
  return (
    <>
      <TopBar handleClick={handleClick} isClicked={isClicked} {...props} />
      <NavList handleClick={handleClick} isClicked={isClicked} {...props} />
    </>
  );
};

export default NavBar;
