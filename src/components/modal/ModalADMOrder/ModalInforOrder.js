import React, { useEffect, useState } from "react";
import { getDataAdmin } from "../../../http/httpHandle";

const ModalInforOrder = ({ onClose = () => {}, id }) => {
  const [order, setOrder] = useState([]);
  const handleGetOrder = async () => {
    const data = await getDataAdmin(`order/${id}`);
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
                <span className="mr-5 w-[40%]">FULL NAME : </span>
                <span>{order?.receiverName}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">PHONE : </span>
                <span>{order?.receiverPhone}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">ADDRESS : </span>
                <span className="w-[50%]">{order?.address}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">ORDER DATE : </span>
                <span>{order.orderDate}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">DELIVERY DATE : </span>
                <span>{order?.deliveryDate}</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">RECEIVE DATE : </span>
                <span>{order?.receiveDate}</span>
              </div>
              <div className="border mb-5"></div>
              <div className="w-full flex items-start mb-5">
                <span className="mr-5 w-[40%]">PRODUCTS : </span>
                <div className="flex flex-col">
                  {order?.orderDetails?.length > 0 &&
                    order.orderDetails.map((item) => (
                      <span>
                        {item.product.name} : x{item.quantity}
                      </span>
                    ))}
                </div>
              </div>
              <div className="border mb-5"></div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">SHIPPER : </span>
                <span>
                  {order?.shipper?.firstName} {order?.shipper?.lastName}
                </span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[40%]">STATUS : </span>
                <span>{order?.status}</span>
              </div>
              <div className="w-full flex items-center">
                <span className="mr-5 w-[40%]">TOTAL : </span>
                <span className="text-2xl text-red-500 font-semibold">
                  {order?.totalMoney} $
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
