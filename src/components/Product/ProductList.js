import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-list ">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard></ProductCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductList;
