import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, getUserData } from "../http/httpHandle";
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
  const [order, setOrder] = useState([]);
  const handleGetOrders = async () => {
    const data = await getUserData("order-user");
    console.log(data);
    setOrder(data.data.list);
  };
  useEffect(() => {
    handleGetOrders();
  }, []);
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
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Receive Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {order.length > 0 &&
              order.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white border-b text-gray-700 border-primary"
                >
                  <td className="px-6 py-4">{item.orderDate}</td>
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.receiverName}</td>
                  <td className="px-6 py-4">{item.receiverPhone}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4 flex items-start flex-col flex-nowrap">
                    {item.orderDetails.length > 0 &&
                      item.orderDetails.map((item) => (
                        <span key={item.id}>
                          {item.product.name} : {item.quantity}
                        </span>
                      ))}
                  </td>
                  <td className="px-6 py-4">{item.totalMoney} $</td>
                  <td className="px-6 py-4">{item.receiveDate}</td>
                  <td className="px-6 py-4">{item.status}</td>
                </tr>
              ))}
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
