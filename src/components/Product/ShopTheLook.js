import React from "react";
import ProductCard from "./ProductCard";

const ShopTheLook = () => {
  return (
    <div className="flex justify-between items-start">
      <div className="w-[45%]">
        <ProductCard></ProductCard>
      </div>
      <div className="grid grid-cols-3 gap-5 w-[52%]">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default ShopTheLook;
