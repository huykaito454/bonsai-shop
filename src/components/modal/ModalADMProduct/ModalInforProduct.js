import React, { useEffect, useState } from "react";
import { getDataAdmin } from "../../../http/httpHandle";

const ModalInforProduct = ({ onClose = () => {}, id }) => {
  const [product, setProduct] = useState([]);
  const handleGetProduct = async () => {
    const data = await getDataAdmin(`product/${id}`);
    setProduct(data.data);
  };
  useEffect(() => {
    handleGetProduct();
  }, []);
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
                <span>{product.name}</span>
              </div>
              <div className="w-full flex items-start justify-between mb-5">
                <span className="mr-5">DESCRIPTION : </span>
                <span className="flex-1 shrink-0">{product.description}</span>
              </div>
              <div className="w-full flex items-start justify-between mb-5">
                <span className="mr-5">INFORMATION : </span>
                <span className="flex-1 shrink-0">{product.information}</span>
              </div>
              <div className="w-full flex items-start justify-between mb-5">
                <span className="mr-5">TYPE : </span>
                <span className="flex-1 shrink-0">
                  {product?.category?.name}
                </span>
              </div>
              <div className="w-full flex items-start justify-between mb-5">
                <span className="mr-5">SOLD : </span>
                <span className="flex-1 shrink-0">{product.quantitySold}</span>
              </div>
              <div className="w-full flex items-start justify-between mb-5">
                <span className="mr-5">IN STOCK : </span>
                <span className="flex-1 shrink-0">{product.quantityStock}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">PRICE : </span>
                <span>{product.price}</span>
              </div>
            </div>
            <div className="flex-1 shrink-0 ">
              <div className="max-w-[500px]">
                <img
                  src={`data:image/png;base64, ${product.image}`}
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
