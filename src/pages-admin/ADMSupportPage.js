import React, { useState } from "react";
import ModalRepSupport from "../components/modal/ModalADMSupport/ModalRepSupport";
import ModalAdvanced from "../components/modal/ModalAdvanced";

const ADMSupportPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-headphones-alt mr-5 text-4xl "></i>
          SUPPORT MANAGEMENT
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center justify-start">
            <select className="outline-none border border-adminBorder rounded-md px-2 py-1">
              <option>All Status</option>
              <option value="">Unanswered</option>
              <option value="">Replied</option>
            </select>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="text"
              className="outline-none px-2 mr-3 rounded-md py-1 border focus:border-admin"
              placeholder="Find"
            />
            <button className="button-admin px-4 py-1 border border-admin">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mb-5 border  border-b-0 border-admin">
          <table className="w-full text-sm text-left text-white bg-admin">
            <thead className="text-xs text-white uppercase bg-admin">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Received Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Content
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-gray-700 border-admin">
                <td className="px-6 py-4">1-1-2001</td>
                <td className="px-6 py-4">tronghuy.832001@gmail.com</td>
                <td className="px-6 py-4">
                  <span className="text-no-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste nisi quaerat blanditiis nostrum deleniti neque fugiat
                    cupiditate, modi sit laborum. Velit corporis nam recusandae
                    quo aliquam suscipit repellat rem beatae.
                  </span>
                </td>
                <td className="px-6 py-4">Unanswered</td>
                <td className="px-6 py-4 flex items-center justify-between">
                  <button
                    className="button-admin py-2 px-4 rounded-md bg-blue-500 mr-1"
                    onClick={() => {
                      setOpenModal(true);
                      setChoice("rep");
                    }}
                  >
                    <i className="fas fa-paper-plane"></i>
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
        {choice === "rep" && (
          <ModalRepSupport
            onClose={() => setOpenModal(false)}
          ></ModalRepSupport>
        )}
      </ModalAdvanced>
    </>
  );
};

export default ADMSupportPage;
