import React, { useEffect, useState } from "react";
import { assignShipper, getDataAdmin } from "../../../http/httpHandle";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const ModalShipOrder = ({ onClose = () => {}, id }) => {
  const [shipper, setShipper] = useState([]);
  const { register, handleSubmit } = useForm();
  const handleGetShipper = async () => {
    const data = await getDataAdmin(`account/shipper`);
    console.log(data.data);
    setShipper(data.data);
  };
  const onSubmit = async (values) => {
    if (values.id_shipper === " ") {
      toast.error("Empty assignment", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      await assignShipper("order/assignment", null, values.id_shipper, id);
    }
  };
  useEffect(() => {
    handleGetShipper();
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
        <div className="text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-truck text-3xl mr-5 "></i>
          ASSIGN SHIPPER
        </div>
        <div className="font-body2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col">
              <div className="w-full flex flex-col items-start mb-2">
                <label className="mr-5">ASSIGN</label>
                <br></br>
                <select
                  className="outline-none w-full border px-4 py-2 "
                  {...register("id_shipper")}
                >
                  <option value=" ">Choose Shipper</option>
                  {shipper.length > 0 &&
                    shipper.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.firstName} {item.lastName}
                      </option>
                    ))}
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
