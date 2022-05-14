import React from "react";
import { NavLink } from "react-router-dom";

const MenuShipper = () => {
  return (
    <div className="font-body2 menu-left fixed w-[230px] flex flex-col h-full bg-admin top-0 left-0 pt-4 px-6 z-10 shadow-sm shadow-admin">
      <NavLink
        to={"/admin"}
        className="logo flex items-center justify-start pb-4 mb-2 text-white border-b border-adminBorder border-opacity-80"
      >
        <div className="avatar w-14 h-14 mr-2">
          <img
            src="https://img.icons8.com/officel/80/000000/supplier.png"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className=" text-3xl">The Sill</p>
      </NavLink>
      <div className="menu-button flex flex-col items-start mb-4 transition-all text-white">
        <NavLink
          to={"shipper/orders"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover"
          }
        >
          <i className="fas fa-file-alt w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Orders</span>
        </NavLink>
      </div>
      <div className="menu-button flex flex-col items-start mb-5 border-t border-adminBorder border-opacity-80 pb-4 transition-all pt-2 text-white">
        <NavLink
          to={"shipper/account"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover "
          }
        >
          <i className="fas fa-user-alt w-[20%] text-xl"></i>
          <span className="text-base font-semibold">My Account</span>
        </NavLink>
      </div>
      <div className="menu-button flex items-start transition-all mt-auto mb-5 text-white">
        <i className="fab fa-facebook-f w-[20%] text-xl"></i>
        <i className="fab fa-twitter w-[20%] text-xl"></i>
        <i className="fab fa-instagram w-[20%] text-xl"></i>
      </div>
    </div>
  );
};

export default MenuShipper;
