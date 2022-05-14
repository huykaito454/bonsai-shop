import React, { useState } from "react";
import ModalAdvanced from "../components/modal/ModalAdvanced";
import ModalResetPassword from "../components/modal/ModalResetPassword/ModalResetPassword";

const ADMMyAccountPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
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
            <div className="w-full flex items-center mb-5">
              <span className="mr-5">BIRTHDAY : </span>
              <span>8-3-2001</span>
            </div>
            <div className="w-full flex items-center mb-10">
              <span className="mr-5">PHONE : </span>
              <span>0937899623</span>
            </div>
            <div className="w-full flex items-center mb-5">
              <div
                className="button-admin"
                onClick={() => {
                  setOpenModal(true);
                  setChoice("reset");
                }}
              >
                Reset Password
              </div>
            </div>
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
