import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { API, config } from "../../../config";
const getCategory = async (id) => {
  try {
    const res = await axios.get(API.getAPIAdmin(`category/${id}`), config);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
const putCategory = async (data, id) => {
  try {
    const res = await axios.put(
      API.getAPIAdmin(`category/${id}`),
      data,
      config
    );
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    alert(error.response.data.message);
  }
};
const ModalEditCategory = ({ onClose = () => {}, id }) => {
  const { register, handleSubmit, setValue } = useForm();
  const handleGetCategory = async () => {
    const data = await getCategory(id);
    handleDefaultValues(data);
  };
  const handleDefaultValues = (data) => {
    for (const [key, value] of Object.entries(data)) {
      setValue(key, value);
    }
  };
  const onSubmit = (values, e) => {
    e.preventDefault();
    putCategory(values, id);
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
      <div className="modal-content font-body2 w-[800px]">
        <div className=" text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-edit text-3xl mr-5 "></i>
          Edit Category
        </div>
        <form
          action=""
          className="flex flex-col items-end"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              CATEGORY NAME
            </label>
            <br></br>
            <input
              type="text"
              {...register("name")}
              className="p-3 w-full outline-none border focus:border-admin mt-2"
            />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              DESCRIPTION
            </label>
            <br></br>
            <textarea
              type="text"
              {...register("description")}
              className="p-3 w-full outline-none border focus:border-admin mt-2 resize-none"
            />
          </div>
          <button className="button w-[30%] mt-5 bg-admin">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default ModalEditCategory;
