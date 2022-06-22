import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="product-card flex flex-col h-full bg-transparent select-none cursor-pointer : hover:-translate-y-1 transition-all"
      onClick={() => navigate(`/product-details/${item.id}`)}
    >
      <img
        src={`data:image/png;base64, ${item.image}`}
        alt=""
        className="w-full object-cover mb-2 "
      />
      <div className="flex items-center justify-between flex-1">
        <span className=" font-semibold">{item.name}</span>
        <span className=" font-semibold">$ {item.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
