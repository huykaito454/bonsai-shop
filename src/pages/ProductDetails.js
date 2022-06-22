import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, getGuestData } from "../http/httpHandle";

const ProductDetails = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const handleGetData = async () => {
    const data = await getGuestData(`product/${productId}`);
    setProduct(data.data);
  };
  const handleAddToCart = async (id) => {
    if (token !== null) {
      await addToCart("cart", null, id);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    handleGetData();
  }, []);
  return (
    <>
      <div className="page-container border-t-2 w-full"></div>
      <div className="w-full page-container flex items-start justify-between px-10 mt-8 mb-20">
        <div className="product-details flex items-start justify-between w-[40%]">
          <div className="w-full">
            <img
              src={`data:image/png;base64, ${product.image}`}
              alt=""
              className="w-full object-cover mb-2 "
            />
          </div>
        </div>
        <div className="product-content w-[56%] flex flex-col">
          <h1 className="text-4xl font-semibold mb-4">{product.name}</h1>
          <p className="text-3xl font-semibold mb-8">$ {product.price}</p>
          <div className="flex items-stretch justify-between w-[80%] ">
            <p className="font-semibold text-sm mr-14 w-[20%]">In store</p>
            <p className="font-semibold text-sm w-[70%]">
              {product.quantitySold}
            </p>
          </div>
          <div className="my-5 border-t-2 w-[80%]"></div>
          <div className="flex items-stretch justify-between w-[80%] mb-10">
            <p className="font-semibold text-sm  w-[20%]">New to plants?</p>
            <p className=" w-[70%] text-sm">{product.information}</p>
          </div>
          <div
            className="button mb-10 w-[80%]"
            onClick={() => {
              handleAddToCart(product.id);
            }}
          >
            $ {product.price} - Add to Cart
          </div>
          <div className="flex items-stretch justify-between w-[80%]">
            <p className="font-semibold text-sm  w-[20%]">Details</p>
            <p className=" w-[70%] text-sm">{product.description}</p>
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
    </>
  );
};

export default ProductDetails;
