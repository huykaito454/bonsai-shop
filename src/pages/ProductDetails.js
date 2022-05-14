import React from "react";
import Blog from "../components/layout/Blog";
import ProductCard from "../components/Product/ProductCard";

const ProductDetails = () => {
  return (
    <>
      <div className="w-full page-container flex items-start justify-between px-10 mt-14 mb-20">
        <div className="product-details flex items-start justify-between w-[48%]">
          <div className="grid grid-cols-1 gap-2 w-[20%] ">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
          <div className="w-[75%]">
            <ProductCard></ProductCard>
          </div>
        </div>
        <div className="product-content w-[48%] flex flex-col">
          <h1 className="text-4xl font-semibold mb-4">Large Snake Laurentii</h1>
          <p className="text-3xl font-semibold mb-8">$88</p>
          <div className="flex items-stretch justify-between w-[80%] mb-10">
            <p className="font-semibold text-sm mr-14 w-[20%]">Planter Style</p>
            <select className="px-3 py-3 w-[70%] border">
              <option value="">Grow Pot Only</option>
            </select>
          </div>
          <div className="flex items-stretch justify-between w-[80%] ">
            <p className="font-semibold text-sm mr-14 w-[20%]">Size</p>
            <p className="font-semibold text-sm w-[70%]">Large</p>
          </div>
          <div className="my-5 border-t-2 w-[80%]"></div>
          <div className="flex items-stretch justify-between w-[80%] mb-10">
            <p className="font-semibold text-sm  w-[20%]">New to plants?</p>
            <p className=" w-[70%] text-sm">
              A grow pot is the container used at our greenhouses. Simply pair
              your plant with any large planter.
            </p>
          </div>
          <div className="button mb-10 w-[80%]">$88 - Add to Cart</div>
          <div className="flex items-stretch justify-between w-[80%]">
            <p className="font-semibold text-sm  w-[20%]">Details</p>
            <p className=" w-[70%] text-sm">
              The Snake Plant is a succulent plant characterized by its
              sword-like leaves with vibrant yellow edges. It is popular for its
              easy-going nature—it can tolerate drought and lower light—and its
              air-purifying capabilities. Sized to ship best, our large Snake
              Plant arrives with room to grow as it adapts to your home’s
              conditions.
            </p>
          </div>
          <div className="my-5 border-t-2 w-[80%]"></div>
          <div className="flex items-stretch justify-between w-[80%]">
            <p className="font-semibold text-sm  w-[20%]">Plant Care</p>
            <div className=" w-[70%] text-sm flex flex-col">
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.shopify.com/s/files/1/0150/6262/t/400/assets/pdp_icon_light.svg?v=4400775217377875679"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <span>Bright indirect to low light</span>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.shopify.com/s/files/1/0150/6262/t/400/assets/pdp_icon_water.svg?v=18168889493737383852"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <span>Water every 2–3 weeks</span>
              </div>
              <div className="flex items-center mb-2">
                <img
                  src="https://cdn.shopify.com/s/files/1/0150/6262/t/400/assets/pdp_icon_plant-care.svg?v=15727152266653786388"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <span>View our Plant Care Guide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <YouMightLike></YouMightLike>
      <Blog
        title={"Plant Bio"}
        content={
          "The Peperomia obtusifolia is native to the Tropical Americas and Caribbean, and is in the family Piperaceae. A popular houseplant, it is sometimes called a baby rubber plant because of its thick green leaves. This peperomia is easily propagated via leaf-cuttings, and is able to regenerate after completely dying back to the stem. Like other peperomias, the Obtusifolia is non-toxic, making it safe to keep around your furry friends. Under ideal conditions, it will flower indoors, producing narrow white spikes."
        }
        url={
          "https://cdn.shopify.com/s/files/1/0150/6262/t/400/assets/pdp-plant-bio-image_air-plants.jpg?v=1773058121048098298"
        }
      ></Blog>
    </>
  );
};

const YouMightLike = () => {
  return (
    <div className="px-10 w-full page-container w-full page-container mb-20">
      <div className="p-10 mb-20 bg-footer">
        <h1 className="text-4xl font-semibold mb-10">You Might Like</h1>
        <div className="grid grid-cols-4 gap-10">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
