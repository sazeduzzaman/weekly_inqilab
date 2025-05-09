import React from "react";
import TopBar from "./NavBar/TopBar";
import CenterBar from "./NavBar/CenterBar";
import BottomBar from "./NavBar/BottomBar";

const Header = () => {
  return (
    <div className="bg-white">
      <TopBar />
      <CenterBar />
      <BottomBar />
    </div>
  );
};

export default Header;
