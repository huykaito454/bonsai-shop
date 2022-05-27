import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOpenAds } from "../../contexts/openAdsContext";
import { NavLink } from "react-router-dom";
import ModalAdvanced from "../modal/ModalAdvanced";

const Header = () => {
  const { open } = useOpenAds();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <header
      className="header page-container w-full bg-white px-10 bg-cover bg-no-repeat relative mb-10"
      style={
        open
          ? {
              height: "550px",
              backgroundImage:
                "url(https://cdn.shopify.com/s/files/1/0150/6262/files/HP_Core_February_Homepage_Desktop_1200x.jpg?v=1645554852)",
            }
          : {}
      }
    >
      <div className="flex items-center justify-between">
        <div className="logo w-[15%] mt-3">
          <NavLink to={"/"} className="text-4xl font-bold cursor-pointer">
            <i className="fas fa-seedling mr-5"></i>
            NHL
          </NavLink>
        </div>
        <div className="main-menu w-[65%] flex items-center justify-start mt-3 ">
          <NavLink to={"/product"} className="mr-10 cursor-pointer">
            Shop
          </NavLink>
          <NavLink to={"/other-product"} className="mr-10 cursor-pointer">
            Other
          </NavLink>
          <NavLink to={"/new-arrivals"} className="mr-10 cursor-pointer">
            New Arrivals
          </NavLink>
          <NavLink to={"/contact"} className="mr-10 cursor-pointer">
            Contact
          </NavLink>
          <NavLink to={"/about-us"} className="mr-10 cursor-pointer">
            About Us
          </NavLink>
        </div>
        <div className="right-menu w-[20%] flex items-center justify-between mt-3">
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => navigate("/search")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </div>
          {!token && (
            <div
              onClick={() => navigate("/login")}
              className="login cursor-pointer"
            >
              Log In
            </div>
          )}
          {token && (
            <div
              onClick={() => navigate("/account")}
              className="login cursor-pointer"
            >
              Account
            </div>
          )}
          <div
            className="cart cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <span>Cart </span>
            <span>( 0 )</span>
          </div>
        </div>
      </div>
      {open && (
        <div className="home-decs absolute top-[53%] -translate-y-2/4">
          <p className=" text-6xl font-semibold">Plants Make</p>
          <p className=" text-6xl font-semibold mt-2 mb-8">People Happy</p>
          <p>Adding plants to your home does more than enhance your space,</p>
          <p className="mb-8">
            it connects you to nature and can boost your mood.
          </p>
          <button
            onClick={() => navigate("/product")}
            className="py-4 px-6 bg-primary text-white font-bold rounded-sm "
          >
            Shop Easy-Care Plants
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
