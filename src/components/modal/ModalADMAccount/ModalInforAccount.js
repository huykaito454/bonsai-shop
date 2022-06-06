import React, { useEffect, useState } from "react";
import { getDataAdmin } from "../../../http/httpHandle";

const ModalInforAccount = ({ onClose = () => {}, id }) => {
  const [account, setAccount] = useState([]);
  const handleGetAllAccount = async () => {
    const data = await getDataAdmin(`account/${id}`);
    setAccount(data.data);
  };
  useEffect(() => {
    handleGetAllAccount();
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
          Information Account
        </div>
        <div className="font-body2">
          <div className="flex items-start justify-between w-full">
            <div className=" flex flex-col w-full">
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">FIRST NAME : </span>
                <span>{account.firstName}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">LAST NAME : </span>
                <span>{account.lastName}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">EMAIL : </span>
                <span>{account.email}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">PHONE : </span>
                <span>{account.phone}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">ADDRESS : </span>
                <span>{account.address}</span>
              </div>
              <div className="w-full flex items-center">
                <span className="mr-5 w-[30%]">ROLE : </span>
                <span>
                  {account.roles?.map((item) => (
                    <span key={item.id}>{item.roleName} </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInforAccount;
