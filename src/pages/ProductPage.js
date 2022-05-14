import React, { useEffect } from "react";
import ProductList from "../components/Product/ProductList";
import ProductCard from "../components/Product/ProductCard";
import { useOpenAds } from "../contexts/openAdsContext";

const ProductPage = ({ title, desc }) => {
  return (
    <>
      <section className="product page-container w-full mb-20 px-10">
        <h1 className="text-5xl font-semibold mb-2 text-primary">{title}</h1>
        <p className="font-semibold mb-10 text-primary">{desc}</p>
        <div className="filter page-container w-full mb-10 p-5 bg-secondary flex items-center justify-end">
          <span className="font-semibold mr-5">FILTER</span>
          <select name="" id="" className="px-4 py-1 w-[10%]">
            <option>Sort</option>
            <option value="">Test1</option>
            <option value="">Test1</option>
            <option value="">Test1</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-14">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
