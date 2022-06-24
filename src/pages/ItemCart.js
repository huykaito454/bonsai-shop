import React from "react";
import { putToCart, removeToCart } from "../http/httpHandle";

const ItemCart = ({ item }) => {
  const handleRemove = async (id) => {
    let confirmAction = window.confirm("Are you sure to delete this product?");
    if (confirmAction) {
      removeToCart("cart", id);
    } else return;
  };
  const handlePutCart = async (quantity, id) => {
    await putToCart("cart", null, id, quantity);
  };
  return (
    <div className="flex items-start justify-start py-10 border-b border-gray-400 border-opacity-30">
      <div className="w-32 mr-10">
        <img
          src={`data:image/png;base64, ${item?.product?.image}`}
          alt=""
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between w-full">
          <p className="text-2xl font-semibold mb-2">{item?.product?.name}</p>
          <i
            className="fas fa-times text-lg cursor-pointer"
            onClick={() => {
              handleRemove(item?.product?.id);
            }}
          ></i>
        </div>
        <p className="text-lg font-semibold mb-2">$ {item.product.price}</p>
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center justify-center px-4 border border-gray-500 border-opacity-30">
            <i
              className="fas fa-angle-left cursor-pointer"
              onClick={() => {
                handlePutCart(item.quantity - 1, item.product.id);
              }}
            ></i>
            <span className="text-2xl font-semibold mx-3 mb-2">
              {item.quantity}
            </span>
            <i
              className="fas fa-angle-right cursor-pointer"
              onClick={() => {
                handlePutCart(item.quantity + 1, item.product.id);
              }}
            ></i>
          </div>
          <span className="text-2xl font-semibold ">
            Total : $ {item.product.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
