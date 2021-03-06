import React, { useEffect, useState } from "react";
import { getDataAdmin } from "../../../http/httpHandle";
const ModalInforCategory = ({ onClose = () => {}, id }) => {
  const [category, setCategory] = useState([]);
  const handleGetCategory = async () => {
    const data = await getDataAdmin(`category/${id}`);
    setCategory(data.data);
  };
  useEffect(() => {
    handleGetCategory();
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
          Information Category
        </div>
        <div className="font-body2">
          <div className="flex items-start justify-between w-full">
            <div className=" flex flex-col w-full">
              <div className="w-full flex items-start mb-5">
                <span className="mr-5 w-[30%]">NAME : </span>
                <span className="flex-1">{category.name}</span>
              </div>
              <div className="w-full flex items-start">
                <span className="mr-5 w-[30%] ">DESCRIPTION : </span>
                <span className="text-justify flex-1">
                  {" "}
                  {category.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInforCategory;
