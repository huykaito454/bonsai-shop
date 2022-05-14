import React, { useState } from "react";
import ModalHistoryReward from "../components/modal/ModalADMReward/ModalHistoryReward";
import ModalInforReward from "../components/modal/ModalADMReward/ModalInforReward";
import ModalAdvanced from "../components/modal/ModalAdvanced";

const ADMRewardPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-donate text-4xl mr-5"></i>
          REWARD POINTS
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-start">
            <input
              type="text"
              className="outline-none px-2 mr-3 rounded-md py-1 border focus:border-admin"
              placeholder="Find Account"
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
                  Date Update
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Reward Points
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
                <td className="px-6 py-4">Nguyen Trong</td>
                <td className="px-6 py-4">Huy</td>
                <td className="px-6 py-4">huykaito1412@gmail.com</td>
                <td className="px-6 py-4">500 points</td>
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
                  <button
                    className="button-admin py-2 px-4 rounded-md"
                    onClick={() => {
                      setOpenModal(true);
                      setChoice("history");
                    }}
                  >
                    <i className="fas fa-history"></i>
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
        {choice === "info" && (
          <ModalInforReward
            onClose={() => setOpenModal(false)}
          ></ModalInforReward>
        )}
        {choice === "history" && (
          <ModalHistoryReward
            onClose={() => setOpenModal(false)}
          ></ModalHistoryReward>
        )}
      </ModalAdvanced>
    </>
  );
};

export default ADMRewardPage;
