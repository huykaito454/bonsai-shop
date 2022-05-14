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
        <div className="avatar w-7 h-7 rounded-full mr-2">
          <img
            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/97563806_2656875631248579_3206429855126126592_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=VFIqS3FsXCAAX9dyMVB&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-T4xKxFwDuQg2yt4NfiHFKGAzDgT2nWEBnF_KG5_x-_A&oe=6258E2BD"
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="text-sm font-semibold text-black mr-2">
          Nguyễn Trọng Huy
        </span>
        <div className="w-7 h-7 rounded-full mr-2" onClick={handleSignOut}>
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
