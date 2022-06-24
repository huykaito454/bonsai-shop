import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, putToCart, removeToCart } from "../http/httpHandle";
import ItemCart from "./ItemCart";

const CartPage = () => {
  const [itemCart, setItemCart] = useState([]);
  const navigate = useNavigate();
  const handleCart = async () => {
    const data = await getData("cart");
    setItemCart(data.data);
    console.log(data.data);
  };
  useEffect(() => {
    handleCart();
  }, []);
  return (
    <div className="w-full page-container px-10 mt-14 mb-20">
      <h1 className=" font-semibold text-4xl mb-10">My Cart</h1>
      <form action="" className="flex items-start justify-between">
        <div className="flex flex-col flex-1 shrink-0 pr-10">
          {itemCart.length > 0 &&
            itemCart.map((item) => (
              <ItemCart key={item.id} item={item}></ItemCart>
            ))}
          {itemCart.length <= 0 && (
            <span className=" text-center text-gray-400">
              No item in your cart
            </span>
          )}
        </div>
        {itemCart.length > 0 && (
          <div className="flex flex-col p-7 bg-footer w-[30%] font-semibold">
            <p className="text-2xl">Order Summary</p>
            <div className="flex items-center justify-between mb-5 mt-10 text-2xl">
              <span>Total Price</span>
              <span>$ {itemCart[0]?.cart?.totalMoney}</span>
            </div>
            <div
              className="button"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              Proceed to checkout
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default CartPage;
