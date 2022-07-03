import React, { useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import { useForm } from "react-hook-form";
import { getGuestData, getSearch } from "../http/httpHandle";
import { useEffect } from "react";
const SearchPage = () => {
  const { register, handleSubmit } = useForm();
  const [product, setProduct] = useState([]);
  const [keyword, setKeyword] = useState();
  const handleSearch = (values) => {
    setProduct([]);
    setKeyword(values.search);
  };
  const handleGetData = async (keyword) => {
    if (keyword) {
      const data = await getSearch("search", keyword);
      setProduct(data.data);
      console.log(data.data);
    } else {
      const data = await getGuestData("top-seller");
      setProduct(data.data);
    }
  };
  useEffect(() => {
    handleGetData(keyword);
  }, [keyword]);
  return (
    <div className="w-full page-container py-10 px-10">
      <form
        className="search flex flex-col mb-20"
        onSubmit={handleSubmit(handleSearch)}
      >
        <p className=" text-xs font-semibold text-gray-400 mb-10">Search</p>
        <input
          type="text"
          placeholder="Type a keyword"
          className=" py-6 w-[60%] text-6xl mb-10 border-b-2 outline-none text-[#7d7a75] focus:border-primary"
          {...register("search")}
        />
        <button className="button w-[10%]">Search Now</button>
      </form>
      <div className="grid grid-cols-4 gap-14">
        {product.length > 0 &&
          product.map((item) => (
            <ProductCard item={item} key={item.id}></ProductCard>
          ))}
        {product.length <= 0 && (
          <span className="text-gray-400">
            No results found for "{keyword}"
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
