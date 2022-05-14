import React from "react";
import { NavLink } from "react-router-dom";

const MenuAdmin = () => {
  return (
    <div className="font-body2 menu-left fixed w-[230px] flex flex-col h-full bg-admin top-0 left-0 pt-4 px-6 z-10 shadow-sm shadow-admin">
      <NavLink
        to={"/admin"}
        className="logo flex items-center justify-start pb-4 mb-2 text-white border-b border-adminBorder border-opacity-80"
      >
        <div className="avatar w-14 h-14 mr-2">
          <img
            src="https://img.icons8.com/officel/80/000000/administrative-tools.png"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className=" text-3xl">The Sill</p>
      </NavLink>
      <div className="menu-button flex flex-col items-start mb-4 transition-all text-white">
        <NavLink
          to={"/admin"}
          className="flex items-center py-2 cursor-pointer w-full hover:text-adminHover "
        >
          <i className="fas fa-home w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Dashboard</span>
        </NavLink>
        <NavLink
          to={"/admin/account"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover "
          }
        >
          <i className="fas fa-users w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Account</span>
        </NavLink>
        <NavLink
          to={"/admin/reward-points"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover "
          }
        >
          <i className="fas fa-donate w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Reward Points</span>
        </NavLink>
        <NavLink
          to={"/admin/product"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover"
          }
        >
          <i className="fas fa-seedling w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Product</span>
        </NavLink>
        <NavLink
          to={"/admin/category"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover"
          }
        >
          <i className="fas fa-list-ul w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Category</span>
        </NavLink>
        <NavLink
          to={"/admin/orders"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover"
          }
        >
          <i className="fas fa-file-alt w-[20%] text-xl"></i>
          <span className="text-base font-semibold">Orders</span>
        </NavLink>
        <NavLink
          to={"/admin/support"}
          className={({ isActive }) =>
            isActive
              ? "text-adminHover flex items-center py-2 cursor-pointer w-full"
              : "flex items-center py-2 cursor-pointer w-full hover:text-adminHover "
          }
        >
          <i className="fas fa-headphones-alt w-[20%] text-xl "></i>
          <span className="text-base font-semibold">Support</span>
        </NavLink>
      </div>
      <div className="menu-button flex flex-col items-start mb-5 border-t border-adminBorder border-opacity-80 pb-4 transition-all pt-2 text-white">
        <NavLink
          to={"/admin/my-account"}
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

export default MenuAdmin;
