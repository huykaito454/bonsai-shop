import React, { useState } from "react";
import ModalInforOrder from "../components/modal/ModalADMOrder/ModalInforOrder";
import ModalAdvanced from "../components/modal/ModalAdvanced";

const SOrdersPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-file-alt mr-5 text-4xl"></i>
          ORDERS MANAGEMENT
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center justify-start">
            <select className="outline-none border border-adminBorder rounded-md px-2 py-1">
              <option>All Status</option>
              <option value="">Unconfirmed</option>
              <option value="">Processing</option>
              <option value="">Successful</option>
            </select>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="text"
              className="outline-none px-2 mr-3 rounded-md py-1 border focus:border-admin"
              placeholder="Find Order"
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
                  Date Start
                </th>
                <th scope="col" className="px-6 py-3">
                  ID Order
                </th>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount Price
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
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Nguyen Trong</td>
                <td className="px-6 py-4">Huy</td>
                <td className="px-6 py-4">Email</td>
                <td className="px-6 py-4">500</td>
                <td className="px-6 py-4">Unconfirmed</td>
                <td className="px-6 py-4 flex items-center justify-between">
                  <button
                    className="button-admin py-2 px-4 rounded-md bg-yellow-500"
                    onClick={() => {
                      setOpenModal(true);
                      setChoice("info");
                    }}
                  >
                    <i className="fas fa-info-circle"></i>
                  </button>
                  <button className="button-admin py-2 px-4 rounded-md bg-green-500">
                    <i className="fas fa-check"></i>
                  </button>
                  <button className="button-admin py-2 px-4 rounded-md bg-red-500">
                    <i className="fas fa-times"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        {choice === "info" && (
          <ModalInforOrder
            onClose={() => setOpenModal(false)}
          ></ModalInforOrder>
        )}
      </ModalAdvanced>
    </>
  );
};

export default SOrdersPage;
