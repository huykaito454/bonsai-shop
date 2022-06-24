import React, { useEffect, useState } from "react";
import { getDataAdmin } from "../../../http/httpHandle";

const ModalInforOrder = ({ onClose = () => {}, id }) => {
  const [order, setOrder] = useState([]);
  const handleGetOrder = async () => {
    const data = await getDataAdmin(`order/${id}`);
    console.log(data.data);
    setOrder(data.data);
  };
  useEffect(() => {
    handleGetOrder();
  }, []);
  return (
    <div className="bg-white p-10 rounded-md w-full max-w-[1200px] max-h-[800px] overflow-scroll">
      <span
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        onClick={onClose}
      >
        <i className="fas fa-times text-xl text-admin"></i>
      </span>
      <div className="modal-content font-body2">
        <div className=" text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-info-circle text-3xl mr-5 "></i>
          Order Details
        </div>
        <div className="font-body2">
          <div className="flex items-start justify-between w-full">
            <div className=" flex flex-col">
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">FIRST NAME : </span>
                <span>Nguyễn Trọng</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">LAST NAME : </span>
                <span>Huy</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">PHONE : </span>
                <span>0937899623</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">ADDRESS : </span>
                <span className="w-[60%]">84/4 Đường số 13 Linh Xuân Thủ </span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">TIME ORDER : </span>
                <span>8:31 | 8-1-2022</span>
              </div>
              <div className="border mb-5"></div>
              <div className="w-full flex items-start mb-5">
                <span className="mr-5 w-[30%]">PRODUCTS : </span>
                <div className="flex flex-col">
                  <span>Dracaena Marginata : x2</span>
                  <span>Dracaena Marginata : x2</span>
                </div>
              </div>
              <div className="border mb-5"></div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">PAYMENT : </span>
                <span>COD</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">PAYMENT STATUS: </span>
                <span>Unpaid</span>
              </div>
              <div className="border mb-5"></div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">STATUS : </span>
                <span>Unconfirmed</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">POINT: </span>
                <span className="text-admin font-semibold">190</span>
              </div>
              <div className="w-full flex items-center">
                <span className="mr-5 w-[30%]">TOTAL : </span>
                <span className="text-2xl text-red-500 font-semibold">
                  1900 $
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInforOrder;
