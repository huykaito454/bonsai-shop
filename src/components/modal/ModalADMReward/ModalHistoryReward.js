import React from "react";

const ModalHistoryReward = ({ onClose = () => {} }) => {
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
          <i className="fas fa-history text-3xl mr-5 "></i>
          History Account Reward
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mb-5 border  border-b-0 border-admin font-body2">
        <table className="w-full text-sm text-left text-white bg-admin">
          <thead className="text-xs text-white uppercase bg-admin">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Points
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b text-gray-700 border-admin">
              <td className="px-6 py-4 ">1-1-2001</td>
              <td className="px-6 py-4">Create an Account</td>
              <td className="px-6 py-4">500</td>
              <td className="px-6 py-4">ADD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModalHistoryReward;
