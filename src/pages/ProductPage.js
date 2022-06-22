import React, { useEffect, useState } from "react";
import ProductList from "../components/Product/ProductList";
import ProductCard from "../components/Product/ProductCard";
import { useOpenAds } from "../contexts/openAdsContext";
import { getGuestData } from "../http/httpHandle";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { categoryId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const handle = async () => {
    const data = await getGuestData(`categories/${categoryId}`);
    setProduct(data.data.list);
  };
  const handleCategory = async () => {
    const data = await getGuestData(`category/${categoryId}`);

    setCategory(data.data);
  };
  useEffect(() => {
    handle();
    handleCategory();
  }, []);
  return (
    <>
      <section className="product page-container w-full mb-20 px-10">
        <h1 className="text-5xl font-semibold mb-2 text-primary">
          {category.name}
        </h1>
        <p className="font-semibold mb-5 text-primary">
          {category.description}
        </p>
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
          {product.length > 0 &&
            product.map((item) => (
              <ProductCard key={item.id} item={item}></ProductCard>
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
