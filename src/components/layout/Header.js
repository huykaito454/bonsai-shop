import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOpenAds } from "../../contexts/openAdsContext";
import { NavLink } from "react-router-dom";
import { getData, getGuestData } from "../../http/httpHandle";

const Header = () => {
  const { open } = useOpenAds();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [categories, setCategories] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [quantityCart, setQuantityCart] = useState(0);
  const handleGetAccount = async () => {
    const data = await getGuestData("categories");
    setCategories(data.data);
  };
  const handleCart = async () => {
    if (token !== null) {
      const data = await getData("cart");
      let quantity = 0;
      data.data.forEach((item) => {
        console.log(item.quantity);
        quantity = quantity + item.quantity;
      });
      setQuantityCart(quantity);
    } else return;
  };
  const handleGetTop = async () => {
    const data = await getGuestData("top-seller", 1, 5);
    setTopProduct(data.data);
  };
  const handleOpenMenu = () => {
    const shop = document.getElementById("shop");
    const menu = document.getElementById("menu-dropdown");
    shop.addEventListener("click", () => {
      menu.classList.toggle("invisible");
      menu.classList.toggle("visible");
    });
    document.addEventListener("click", function (event) {
      if (
        !shop.contains(event.target) &&
        !event.target.matches("#menu-dropdown")
      ) {
        menu.classList.remove("visible");
        menu.classList.add("invisible");
      }
    });
  };
  useEffect(() => {
    handleGetAccount();
    handleGetTop();
    handleCart();
    handleOpenMenu();
    return () => {
      window.removeEventListener("click", handleOpenMenu());
    };
  }, []);
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
          <p className="mr-10 cursor-pointer" id="shop">
            Shop
          </p>
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
            <span>( {quantityCart} )</span>
          </div>
        </div>
      </div>
      <div
        className="w-[94.5%] py-6 px-6 bg-[#f4f0e8] mt-4 absolute z-40 flex justify-between invisible shadow-lg"
        id="menu-dropdown"
      >
        <div className="flex flex-col w-[25%]">
          <span className="mb-4 mt-2 text-sm">All Category</span>
          {categories.length > 0 &&
            categories.map((item) => (
              <span
                key={item.id}
                className="font-semibold my-2 cursor-pointer"
                onClick={() => {
                  navigate(`product/${item.id}`);
                  window.location.reload(false);
                }}
              >
                {item.name}
              </span>
            ))}
        </div>
        <div className="w-[70%]">
          <div className="mb-4 mt-2 text-sm">Recommend</div>
          <div className="grid grid-cols-4 gap-4 ">
            {topProduct.length > 0 &&
              topProduct.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className=" cursor-pointer"
                  onClick={() => navigate(`/product-details/${item.id}`)}
                >
                  <img
                    src={`data:image/png;base64, ${item.image}`}
                    alt=""
                    className="w-full object-cover mb-2 "
                  />
                  <span className=" font-semibold text-sm">{item.name}</span>
                </div>
              ))}
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
            onClick={() => navigate(`product/${categories[0].id}`)}
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
