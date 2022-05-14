import React, { useState } from "react";
import ModalCreateProduct from "../components/modal/ModalADMProduct/ModalCreateProduct";
import ModalEditProduct from "../components/modal/ModalADMProduct/ModalEditProduct";
import ModalInforProduct from "../components/modal/ModalADMProduct/ModalInforProduct";
import ModalAdvanced from "../components/modal/ModalAdvanced";

const ADMProductPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-seedling text-4xl mr-5"></i>
          PRODUCT MANAGEMENT
        </div>
        <div className="flex justify-between mb-7">
          <div className="flex items-center justify-start">
            <span className="mr-3">New Product</span>
            <button
              className="button-admin px-4 py-1 border border-admin"
              onClick={() => {
                setOpenModal(true);
                setChoice("new");
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="text"
              className="outline-none px-2 mr-3 rounded-md py-1 border focus:border-admin"
              placeholder="Find Product"
            />
            <button className="button-admin px-4 py-1 border border-admin">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-start">
            <span className="mr-3">Filter By Category</span>
            <select className="outline-none border border-adminBorder rounded-md px-2 py-1">
              <option></option>
              <option value="">TEST</option>
              <option value="">TEST</option>
              <option value="">TEST</option>
            </select>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mb-5 border  border-b-0 border-admin">
          <table className="w-full text-sm text-left text-white bg-admin">
            <thead className="text-xs text-white uppercase bg-admin">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Date Start
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  IMAGE
                </th>
                <th scope="col" className="px-6 py-3">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-gray-700 border-admin">
                <td className="px-6 py-4 ">1-1-2001</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_monstera_variant_medium_grant_black_587b36b4-4304-47f4-924e-b0bb4dfb0090_768x.jpg?v=1646670602"
                    alt=""
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="px-6 py-4">Monstera Adansonii</td>
                <td className="px-6 py-4">Plant</td>
                <td className="px-6 py-4">50 $</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4 flex items-center justify-between">
                  <button
                    className="button-admin py-2 px-4 rounded-md bg-yellow-500"
                    onClick={() => {
                      setOpenModal(true);
                      setChoice("infor");
                    }}
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button
                    className="button-admin py-2 px-4 rounded-md"
                    onClick={() => {
                      setOpenModal(true);
                      setChoice("edit");
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="button-admin py-2 px-4 rounded-md bg-red-500">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        {choice === "new" && (
          <ModalCreateProduct
            onClose={() => setOpenModal(false)}
          ></ModalCreateProduct>
        )}
        {choice === "infor" && (
          <ModalInforProduct
            onClose={() => setOpenModal(false)}
          ></ModalInforProduct>
        )}
        {choice === "edit" && (
          <ModalEditProduct
            onClose={() => setOpenModal(false)}
          ></ModalEditProduct>
        )}
      </ModalAdvanced>
    </>
  );
};

export default ADMProductPage;