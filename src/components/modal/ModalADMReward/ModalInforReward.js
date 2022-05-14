import React from "react";

const ModalInforReward = ({ onClose = () => {} }) => {
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
          Information Account Reward
        </div>
        <div className="font-body2">
          <div className="flex items-start justify-between w-full">
            <div className=" flex flex-col">
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">FIRST NAME : </span>
                <span>Nguyễn Trọng</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">LAST NAME : </span>
                <span>Huy</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5">EMAIL : </span>
                <span>huykaito1412@gmail.com</span>
              </div>
              <div className="w-full flex items-center">
                <span className="mr-5">REWARD POINTS : </span>
                <span className="text-2xl font-semibold text-admin">999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInforReward;
