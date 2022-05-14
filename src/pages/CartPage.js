import React from "react";

const CartPage = () => {
  return (
    <div className="w-full page-container px-10 mt-14 mb-20">
      <h1 className=" font-semibold text-4xl mb-10">My Cart</h1>
      <form action="" className="flex items-start justify-between">
        <div className="flex flex-col flex-1 shrink-0 pr-10">
          <div className="flex items-start justify-start py-10 border-b border-gray-400 border-opacity-30">
            <div className="w-32 mr-10">
              <img
                src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_black_587b36b4-4304-47f4-924e-b0bb4dfb0090_768x.jpg?v=1646670602"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between w-full">
                <p className="text-2xl font-semibold mb-2">
                  Monstera Deliciosa
                </p>
                <i className="fas fa-times text-lg cursor-pointer"></i>
              </div>
              <p className="text-lg font-semibold mb-2">$32</p>
              <div className="flex items-center justify-between mt-12">
                <div className="flex items-center justify-center px-4 border border-gray-500 border-opacity-30">
                  <i className="fas fa-angle-left cursor-pointer"></i>
                  <span className="text-2xl font-semibold mx-3 mb-2">1</span>
                  <i className="fas fa-angle-right cursor-pointer"></i>
                </div>
                <span className="text-2xl font-semibold ">Total : $32</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-7 bg-footer w-[30%] font-semibold">
          <p className="text-2xl mb-10">Order Summary</p>
          <div className="flex items-center justify-between mb-5 ">
            <span>Subtotal</span>
            <span>$ 7.830</span>
          </div>
          <div className="flex items-center justify-between mb-5">
            <span>Shipping Charges</span>
            <span>$ 150</span>
          </div>
          <div className="flex items-center justify-between mb-5 mt-14 text-3xl">
            <span>Total Price</span>
            <span>$ 7.980</span>
          </div>
          <div className="button">Proceed to checkout</div>
        </div>
      </form>
    </div>
  );
};

export default CartPage;
