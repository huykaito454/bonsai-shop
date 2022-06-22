import React from "react";
import ProductCard from "../components/Product/ProductCard";

const SearchPage = () => {
  return (
    <div className="w-full page-container py-10 px-10">
      <div className="search flex flex-col mb-20">
        <p className=" text-xs font-semibold text-gray-400 mb-10">Search</p>
        <input
          type="text"
          placeholder="Type a keyword"
          className=" py-6 w-[60%] text-6xl mb-10 border-b-2 outline-none text-[#7d7a75] focus:border-primary"
        />
        <button className="button w-[10%]">Search Now</button>
      </div>
      <div className="grid grid-cols-4 gap-14">
        {/* <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard> */}
      </div>
    </div>
  );
};

export default SearchPage;
