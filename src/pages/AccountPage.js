import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../http/httpHandle";
import { useForm } from "react-hook-form";

const AccountPage = () => {
  const [choice, setChoice] = useState("accountDetails");
  const [account, setAccount] = useState([]);
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
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
    <div className="w-full page-container p-10 flex items-start justify-between">
      <div className="account-menu flex flex-col w-[20%]">
        <p
          className="mb-3 cursor-pointer"
          onClick={() => setChoice("accountDetails")}
        >
          Account Details
        </p>
        <p
          className="mb-3 cursor-pointer"
          onClick={() => setChoice("orderHistory")}
        >
          Order History
        </p>
        <p className="mb-3 cursor-pointer" onClick={handleSignOut}>
          Sign Out
        </p>
      </div>
      <div className="flex-1 shrink-0 flex flex-col">
        <AccountDetails account={account} open={choice}></AccountDetails>
        <OrderHistory open={choice}></OrderHistory>
      </div>
    </div>
  );
};

const OrderHistory = ({ open = "" }) => {
  return (
    <div
      className={`account-content flex-1 shrink-0 ${
        open === "orderHistory" ? "" : "opacity-0 invisible hidden"
      }`}
    >
      <h1 className="text-6xl font-semibold mb-10">Order History</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mb-5 border  border-b-0 border-primary">
        <table className="w-full text-sm text-left text-white bg-primary">
          <thead className="text-xs text-white uppercase bg-primary">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date Start
              </th>
              <th scope="col" className="px-6 py-3">
                ID Order
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b text-gray-700 border-primary">
              <td className="px-6 py-4">1-1-2001</td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">84/4 Đường số 13 Linh Xuân Thủ Đức</td>
              <td className="px-6 py-4">500</td>
              <td className="px-6 py-4">Unconfirmed</td>
              <td className="px-6 py-4 flex items-center justify-between">
                <button className="button-admin py-2 px-4 rounded-md bg-yellow-500">
                  <i className="fas fa-info-circle"></i>
                </button>
                <button className="button-admin py-2 px-4 rounded-md bg-red-500">
                  <i className="fas fa-ban"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
const AccountDetails = ({ open, account }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: account,
  });
  const handleSetDefaultValue = (data) => {
    for (const [key, value] of Object.entries(data)) {
      setValue(key, value);
    }
  };
  useEffect(() => {
    handleSetDefaultValue(account);
  }, [account]);
  return (
    <div
      className={`account-content flex-1 shrink-0 ${
        open === "accountDetails" ? "" : "opacity-0 invisible hidden"
      }`}
    >
      <h1 className="text-6xl font-semibold mb-10">Account Details</h1>
      <form action="" className="w-[70%]">
        <div className="mb-5 ">
          <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
            FIRST NAME
          </label>
          <br></br>
          <input
            type="text"
            {...register("firstName")}
            className="p-3 w-full outline-none border focus:border-primary mt-2"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className=" text-gray-500 text-sm mb-5 font-semibold"
          >
            LAST NAME
          </label>
          <br></br>
          <input
            type="text"
            {...register("lastName")}
            className="p-3 w-full outline-none border focus:border-primary mt-2"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className=" text-gray-500 text-sm mb-5 font-semibold"
          >
            EMAIL
          </label>
          <br></br>
          <input
            type="text"
            {...register("email")}
            className="p-3 w-full outline-none border focus:border-primary mt-2"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className=" text-gray-500 text-sm mb-5 font-semibold"
          >
            PHONE
          </label>
          <br></br>
          <input
            type="text"
            {...register("phone")}
            className="p-3 w-full outline-none border focus:border-primary mt-2"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className=" text-gray-500 text-sm mb-5 font-semibold"
          >
            ADDRESS
          </label>
          <br></br>
          <input
            type="text"
            {...register("address")}
            className="p-3 w-full outline-none border focus:border-primary mt-2"
          />
        </div>
        <button className="button w-full mt-5">Confirm</button>
      </form>
    </div>
  );
};
export default AccountPage;
