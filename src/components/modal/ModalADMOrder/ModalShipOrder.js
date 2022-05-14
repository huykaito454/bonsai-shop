import React from "react";

const ModalShipOrder = ({ onClose = () => {} }) => {
  return (
    <div className="bg-white p-10 rounded-md w-full max-w-[1200px] max-h-[800px] overflow-scroll">
      <span
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        onClick={onClose}
      >
        <i className="fas fa-times text-xl text-admin"></i>
      </span>
      <div className="modal-content font-body2">
        <div className="text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-truck text-3xl mr-5 "></i>
          ASSIGN SHIPPER
        </div>
        <div className="font-body2">
          <form>
            <div className=" flex flex-col">
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">ID ORDER : </span>
                <span>123</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">NAME : </span>
                <span>Huy</span>
              </div>
              <div className="w-full flex items-center mb-5">
                <span className="mr-5 w-[30%]">PHONE : </span>
                <span>0937899623</span>
              </div>
              <div className="w-full flex items-start mb-5">
                <span className="mr-5 w-[30%]">ADDRESS : </span>
                <span className="w-[60%]">84/4 Đường số 13 Linh Xuân Thủ </span>
              </div>
              <div className="border mb-5"></div>
              <div className="w-full flex items-center mb-5">
                <label className="mr-5">ROLE</label>
                <br></br>
                <select className="outline-none border px-4 py-2 mt-2">
                  <option>Choose Shipper</option>
                  <option value="">Shipper 1</option>
                  <option value="">Shipper 2</option>
                  <option value="">Shipper 3</option>
                </select>
              </div>
              <button className="button w-full mt-5 bg-admin">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalShipOrder;
