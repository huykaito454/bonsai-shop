import React from "react";

const ProductCard = () => {
  return (
    <div className="product-card flex flex-col h-full bg-transparent select-none cursor-pointer : hover:-translate-y-1 transition-all">
      <img
        src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_black_587b36b4-4304-47f4-924e-b0bb4dfb0090_768x.jpg?v=1646670602"
        alt=""
        className="w-full object-cover mb-2 "
      />
      <div className="flex items-center justify-between flex-1">
        <span className=" font-semibold">Monstera Deliciosa</span>
        <span className=" font-semibold">$38</span>
      </div>
    </div>
  );
};

export default ProductCard;
