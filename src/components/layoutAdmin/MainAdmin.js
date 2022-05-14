import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import MenuAdmin from "./MenuAdmin";

const MainAdmin = () => {
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <MenuAdmin></MenuAdmin>
      <Outlet></Outlet>
    </>
  );
};

export default MainAdmin;
