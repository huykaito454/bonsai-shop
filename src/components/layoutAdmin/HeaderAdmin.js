import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
    delete axios.defaults.headers.common["Authorization"];
    navigate("/");
    window.location.reload(false);
  };
  return (
    <div className="font-body2 w-full flex items-center justify-end bg-top py-3 px-6 fixed bg-white z-10">
      <div className="flex items-center justify-between cursor-pointer p-1 rounded-full hover:bg-primaryAdmin hover:bg-opacity-10">
        <div className="w-7 h-7 rounded-full " onClick={handleSignOut}>
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

export default HeaderAdmin;
