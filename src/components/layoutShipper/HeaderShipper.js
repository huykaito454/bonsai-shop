import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../http/httpHandle";

const HeaderShipper = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const handleSignOut = () => {
    localStorage.clear();
    delete axios.defaults.headers.common["Authorization"];
    navigate("/");
    window.location.reload(false);
  };
  const handleGetAccount = async () => {
    const data = await getData("account/account_detail");
    setAccount(data.data);
  };
  useEffect(() => {
    handleGetAccount();
  }, []);
  return (
    <div className="font-body2 w-full flex items-center justify-end bg-top py-3 px-6 fixed bg-white z-10">
      <div className="flex items-center justify-between cursor-pointer p-1 rounded-full hover:bg-primaryAdmin hover:bg-opacity-10">
        <span className="text-sm font-semibold text-black mr-5">
          {account.firstName} {account.lastName}
        </span>
        <div
          className="w-7 h-7 rounded-full mr-2"
          onClick={() => {
            handleSignOut();
          }}
        >
          <img
            src="https://img.icons8.com/office/80/000000/shutdown--v1.png"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderShipper;
