import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <Banner></Banner>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
