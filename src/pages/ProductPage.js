import React, { useEffect, useState } from "react";
import ProductList from "../components/Product/ProductList";
import ProductCard from "../components/Product/ProductCard";
import { useOpenAds } from "../contexts/openAdsContext";
import { getGuestData } from "../http/httpHandle";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
const ProductPage = () => {
  const { categoryId } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const handle = async (nextPage) => {
    const data = await getGuestData(`categories/${categoryId}`, nextPage);
    setTotalPage(data.data.totalpage);
    setProduct(data.data.list);
  };
  const handleCategory = async () => {
    const data = await getGuestData(`category/${categoryId}`);
    setCategory(data.data);
  };
  useEffect(() => {
    handle(nextPage);
    handleCategory();
  }, [nextPage]);
  return (
    <>
      <section className="product page-container w-full mb-20 px-10">
        <h1 className="text-5xl font-semibold mb-2 text-primary">
          {category.name}
        </h1>
        <p className="font-semibold mb-5 text-primary">
          {category.description}
        </p>

        <div className="grid grid-cols-4 gap-14">
          {product.length > 0 &&
            product.map((item) => (
              <ProductCard key={item.id} item={item}></ProductCard>
            ))}
        </div>
        <div className="flex items-center justify-center text-primary mt-12">
          <i
            className="fas fa-angle-left text-3xl cursor-pointer"
            onClick={() => {
              if (nextPage === 1) return;
              else {
                setNextPage(nextPage - 1);
              }
            }}
          ></i>
          <div className="flex items-center justify-center text-3xl mb-3 mx-3 ">
            {new Array(totalPage).fill(0).map((item, index) => (
              <span
                key={index}
                className="mx-2 cursor-pointer"
                onClick={() => {
                  setNextPage(index + 1);
                }}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <i
            className="fas fa-angle-right text-3xl cursor-pointer"
            onClick={() => {
              if (nextPage === totalPage) return;
              else {
                setNextPage(nextPage + 1);
              }
            }}
          ></i>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
