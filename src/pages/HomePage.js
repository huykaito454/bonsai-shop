import React, { useEffect, useRef } from "react";
import ProductList from "../components/Product/ProductList";
import ShopTheLook from "../components/Product/ShopTheLook";
import AfterFooter from "../components/layout/AfterFooter";
import { useOpenAds } from "../contexts/openAdsContext";

const HomePage = () => {
  const { setOpen } = useOpenAds();
  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, [setOpen]);

  return (
    <>
      <section className="product page-container w-full mb-10 px-10">
        <h1 className="text-5xl font-semibold mb-10">New Release</h1>
        <ProductList type={"new-release"}></ProductList>
      </section>
      <section className="product page-container w-full mb-10 px-10">
        <h1 className="text-5xl font-semibold mb-10">Top Seller</h1>
        <ProductList type={"top-seller"}></ProductList>
      </section>
      {/* <section className="product page-container w-full mb-10 px-10">
        <h1 className="text-5xl font-semibold mb-10">Shop the Look</h1>
        <ShopTheLook></ShopTheLook>
      </section> */}
      {/* <AfterFooter></AfterFooter> */}
    </>
  );
};

export default HomePage;
