import React from "react";
import { Outlet } from "react-router-dom";
import HeaderShipper from "./HeaderShipper";
import MenuShipper from "./MenuShipper";

const MainShipper = () => {
  return (
    <>
      <HeaderShipper></HeaderShipper>
      <MenuShipper></MenuShipper>
      <Outlet></Outlet>
    </>
  );
};

export default MainShipper;
