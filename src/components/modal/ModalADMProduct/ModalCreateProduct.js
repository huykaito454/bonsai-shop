import React from "react";

const ModalCreateProduct = ({ onClose = () => {} }) => {
  return (
    <div className="bg-white p-10 rounded-md w-full max-w-[1200px] max-h-[600px] overflow-scroll">
      <span
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        onClick={onClose}
      >
        <i className="fas fa-times text-xl text-admin"></i>
      </span>
      <div className="modal-content font-body2 w-[800px]">
        <div className=" text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-seedling text-3xl mr-5 "></i>
          Create Product
        </div>
        <form action="" className="flex flex-col items-end">
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              PRODUCT NAME
            </label>
            <br></br>
            <input
              type="text"
              className="p-3 w-full outline-none border focus:border-admin mt-2"
            />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              DESCRIPTION
            </label>
            <br></br>
            <textarea
              type="text"
              className="p-3 w-full outline-none border focus:border-admin mt-2 resize-none"
            />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              QUANTITY
            </label>
            <br></br>
            <input
              type="text"
              className="p-3 w-full outline-none border focus:border-admin mt-2"
            />
          </div>

          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              PRICE
            </label>
            <br></br>
            <input
              type="text"
              className="p-3 w-full outline-none border focus:border-admin mt-2"
            />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              IMAGE
            </label>
            <br></br>
            <input
              type="file"
              className="p-3 w-full outline-none border focus:border-admin mt-2"
            />
          </div>
          <div className="mb-5 w-full">
            <label className="text-gray-500 text-sm font-semibold">
              CATEGORY
            </label>
            <br></br>
            <select className="outline-none border px-4 py-2 mt-2">
              <option>Choose Category</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
          </div>
          <button className="button w-[30%] mt-5 bg-admin">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default ModalCreateProduct;
