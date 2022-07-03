import React, { useEffect, useState } from "react";
import ModalAdvanced from "../components/modal/ModalAdvanced";
import ModalResetPassword from "../components/modal/ModalResetPassword/ModalResetPassword";
import { getData } from "../http/httpHandle";

const ADMMyAccountPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  const [account, setAccount] = useState([]);
  const handleGetAccount = async () => {
    const data = await getData("account/account_detail");
    setAccount(data.data);
    console.log(data);
  };
  useEffect(() => {
    handleGetAccount();
  }, []);
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-12">
          <i className="fas fa-user-alt mr-5 text-4xl"></i>
          MY ACCOUNT
        </div>
        <div className="flex items-start justify-between w-full">
          <div className=" flex flex-col">
            <div className="w-full flex items-center mb-5">
              <span className="mr-5">FIRST NAME : </span>
              <span>{account.firstName}</span>
            </div>
            <div className="w-full flex items-center mb-5">
              <span className="mr-5">LAST NAME : </span>
              <span>{account.lastName}</span>
            </div>
            <div className="w-full flex items-center mb-5">
              <span className="mr-5">EMAIL : </span>
              <span>{account.email}</span>
            </div>
            <div className="w-full flex items-center mb-5">
              <span className="mr-5">PHONE : </span>
              <span>{account.phone}</span>
            </div>
            <div className="w-full flex items-center">
              <span className="mr-5">ADDRESS : </span>
              <span>{account.address}</span>
            </div>
            <div className="w-full flex items-center mb-5"></div>
          </div>
        </div>
      </div>
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        {choice === "reset" && (
          <ModalResetPassword
            onClose={() => setOpenModal(false)}
          ></ModalResetPassword>
        )}
      </ModalAdvanced>
    </>
  );
};

export default ADMMyAccountPage;
