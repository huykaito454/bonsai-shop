import React from "react";

const ModalInforProduct = ({ onClose = () => {} }) => {
  return (
    <div className="bg-white p-10 rounded-md w-full max-w-[1200px] max-h-[800px] overflow-scroll">
      <span
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        onClick={onClose}
      >
        <i className="fas fa-times text-xl text-admin"></i>
      </span>
      <div className="modal-content font-body2 ">
        <div className=" text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-info-circle text-3xl mr-5 "></i>
          Information Product
        </div>
        <div className="font-body2">
          <div className="flex items-start justify-between w-full">
            <div className=" flex flex-col w-[70%] mr-5">
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">PRODUCT NAME : </span>
                <span>Monstera Deliciosa</span>
              </div>
              <div className="w-full flex items-start justify-between mb-5">
                <span className="mr-5">DESCRIPTION : </span>
                <span className="flex-1 shrink-0">
                  Nicknamed the swiss cheese plant, the Monstera deliciosa is
                  famous for its quirky natural leaf holes. These holes are
                  theorized to maximize sun fleck capture on the forest floor.
                  Depending on the season and maturity of the plant, your
                  Monstera could arrive with no holes just yet, and be sized to
                  grow alongside you
                </span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">QUALITY : </span>
                <span>99</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">PRICE : </span>
                <span>999 $</span>
              </div>
              <div className="w-full flex items-center">
                <span className="mr-5">CATEGORY : </span>
                <span>Plant</span>
              </div>
            </div>
            <div className="flex-1 shrink-0 ">
              <div className="max-w-[500px]">
                <img
                  src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_black_587b36b4-4304-47f4-924e-b0bb4dfb0090_768x.jpg?v=1646670602"
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInforProduct;
