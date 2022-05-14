import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { API, config } from "../../../config";

const ModalEditAccount = ({ onClose = () => {}, id }) => {
  return (
    <div className="bg-white p-10 rounded-md w-full max-w-[1200px] max-h-[800px] overflow-scroll">
      <span
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        onClick={onClose}
      >
        <i className="fas fa-times text-xl text-admin"></i>
      </span>
      <div className="modal-content font-body2 w-[1000px]">
        <div className=" text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-edit text-3xl mr-5 "></i>
          Edit Account
        </div>
        <FormEditAccount idUser={id}></FormEditAccount>
      </div>
    </div>
  );
};
const getAccount = async (id) => {
  try {
    const res = await axios.get(API.getAPIAdmin(`account/${id}`), config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const putAccount = async (data, id) => {
  try {
    const res = await axios.put(API.getAPIAdmin(`account/${id}`), data, config);
    console.log(res);
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    alert("Error. Please try again !");
  }
};
const FormEditAccount = ({ idUser }) => {
  const [account, setAccount] = useState([]);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: account,
  });
  const handleGetAccount = async () => {
    const data = await getAccount(idUser);
    setAccount(data?.data);
    handleSetDefaultValue(data?.data);
    handleCheckbox(data?.data.roles);
  };
  const handleCheckbox = (data) => {
    data.map((item) => {
      document.getElementById(`${item.roleName}`).checked = true;
      setValue(item.roleName, true);
    });
  };
  const handleSetDefaultValue = (data) => {
    for (const [key, value] of Object.entries(data)) {
      setValue(key, value);
    }
  };
  useEffect(() => {
    handleGetAccount();
  }, []);
  const roleList = [
    { id: 2, roleName: "USER" },
    { id: 1, roleName: "ADMIN" },
    { id: 3, roleName: "SHIPPER" },
  ];
  const onSubmit = (values, e) => {
    e.preventDefault();
    console.log("gia tri mac dinh", values);
    const data = handleData(values);
    console.log("gia tri sau khi handle", data);
    putAccount(data, idUser);
  };
  const handleData = (data) => {
    const roles = [];
    for (const [key, value] of Object.entries(data)) {
      if (
        (key === "ADMIN" || key === "USER" || key === "SHIPPER") &&
        value === true
      ) {
        roles.push(key);
      }
    }
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      roleName: roles,
    };
  };
  return (
    <form
      action=""
      className="flex flex-col items-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex items-center justify-between">
        <div className="mb-5 w-[48%]">
          <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
            FIRST NAME
          </label>
          <br></br>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className="p-3 w-full outline-none border focus:border-admin mt-2"
          />
        </div>
        <div className="mb-5 w-[48%]">
          <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
            LAST NAME
          </label>
          <br></br>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            className="p-3 w-full outline-none border focus:border-admin mt-2"
          />
        </div>
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          EMAIL
        </label>
        <br></br>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="p-3 w-full outline-none border focus:border-admin mt-2"
        />
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          PHONE
        </label>
        <br></br>
        <input
          type="number"
          id="phone"
          {...register("phone")}
          className="p-3 w-full outline-none border focus:border-admin mt-2"
        />
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          ADDRESS
        </label>
        <br></br>
        <input
          type="text"
          id="address"
          {...register("address")}
          className="p-3 w-full outline-none border focus:border-admin mt-2"
        />
      </div>
      <div className="mb-5 w-full">
        <label className="text-gray-500 text-sm font-semibold">ROLE</label>
        <br></br>
        <div className="flex items-center mt-2">
          {roleList.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                id={item.roleName}
                {...register(`${item.roleName}`)}
              />
              <label htmlFor={item.roleName} className="ml-2 mr-5">
                {item.roleName}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button className="button w-[30%] mt-5 bg-admin">Confirm</button>
    </form>
  );
};
export default ModalEditAccount;
