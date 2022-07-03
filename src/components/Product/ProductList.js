import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getGuestData } from "../../http/httpHandle";
import ProductCard from "./ProductCard";

const ProductList = ({ type }) => {
  const [product, setProduct] = useState([]);
  const handle = async () => {
    const data = await getGuestData(`${type}`);
    setProduct(data.data);
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <div className="product-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {product.length > 0 &&
          product.slice(0, 5).map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard item={item}></ProductCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
