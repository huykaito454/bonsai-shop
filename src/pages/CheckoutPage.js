import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, paymentData } from "../http/httpHandle";
import { useForm } from "react-hook-form";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [itemCart, setItemCart] = useState([]);
  const handleItemCart = async () => {
    const data = await getData("cart");
    setItemCart(data.data);
  };
  useEffect(() => {
    handleItemCart();
  }, []);
  return (
    <>
      <div
        className="w-full px-5 pb-2 border-b-2 pt-6 header-checkout"
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0150/6262/files/plant-icon.jpg?v=1646263550)",
        }}
      >
        <div className="flex items-start justify-between">
          <h1
            className="text-4xl font-semibold text-primary cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fas fa-seedling mr-5"></i>
            <span>NHL</span>
          </h1>
          <div className="title-checkout">
            <h1 className="text-2xl font-semibold">30-Day Guarantee</h1>
            <span className="text-lg text-gray-500">
              Your plants will arrive in happy, healthy condition or we replace
              them for free.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mb-20 page-container mt-10 px-32 flex items-start justify-between">
        {itemCart.length > 0 && (
          <>
            <InformationAccount></InformationAccount>
            <InformationCart itemCart={itemCart}></InformationCart>
          </>
        )}
        {!itemCart ||
          (itemCart.length <= 0 && (
            <div className="flex flex-col items-center w-full justify-center mt-20">
              <i className="fas fa-check-circle text-primary text-6xl mb-8"></i>
              <h1 className="text-3xl text font-semibold mb-2">Thank you !</h1>
              <span className=" text-gray-500 mb-10">
                Thank you for using our service. We will contact you soon
              </span>
              <div
                className="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                Continue Shopping
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

const InformationAccount = () => {
  const [account, setAccount] = useState([]);
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: account,
  });
  const handleSetDefaultValue = (data) => {
    setValue("receiverName", `${data.firstName} ${data.lastName}`);
    setValue("receiverPhone", data.phone);
    setValue("email", data.email);
    setValue("address", data.address);
  };
  const handleAccount = async () => {
    const data = await getData("account/account_detail");
    setAccount(data.data);
    handleSetDefaultValue(data.data);
  };
  const handleOnSubmit = (values) => {
    const data = {
      receiverName: values.receiverName,
      receiverPhone: values.receiverPhone,
      address: values.address,
    };
    paymentData("payment", data);
  };
  useEffect(() => {
    handleAccount();
  }, []);
  return (
    <form className="pay w-[50%]" onSubmit={handleSubmit(handleOnSubmit)}>
      <p className="text-2xl font-semibold mb-5">Shipping address</p>
      <div className="mb-5 ">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          FULL NAME
        </label>
        <br></br>
        <input
          type="text"
          {...register("receiverName")}
          className="p-3 w-full outline-none border focus:border-primary mt-2"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          EMAIL
        </label>
        <br></br>
        <input
          type="email"
          readOnly
          {...register("email")}
          className="p-3 w-full outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          PHONE
        </label>
        <br></br>
        <input
          type="text"
          {...register("receiverPhone")}
          className="p-3 w-full outline-none border focus:border-primary mt-2"
        />
      </div>
      <div className="mb-5">
        <label htmlFor="" className=" text-gray-500 text-sm mb-5 font-semibold">
          ADDRESS
        </label>
        <br></br>
        <input
          type="text"
          {...register("address")}
          className="p-3 w-full outline-none border focus:border-primary mt-2"
        />
      </div>
      <button className="button w-48 float-right mt-5">Payment</button>
    </form>
  );
};

const InformationCart = ({ itemCart }) => {
  return (
    <div className="information w-[35%] ">
      {itemCart.length > 0 &&
        itemCart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full mb-4 "
          >
            <div className="flex items-center">
              <div className="rounded-lg  mr-5 relative ">
                <img
                  src={`data:image/png;base64, ${item?.product?.image}`}
                  alt=""
                  className="w-32 object-cover"
                />
                <div className=" absolute top-0 right-0 w-6 bg-primary  z-50 translate-x-1/3 -translate-y-1/3 rounded-full flex items-center justify-center">
                  <span className="text-center">{item.quantity}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className=" font-semibold text-lg">
                  {item.product.name}
                </span>
                <span className=" font-semibold text-lg"></span>
              </div>
            </div>
            <div className="">
              <span className="text-xl font-semibold">
                $ {item.product.price * item.quantity}
              </span>
            </div>
          </div>
        ))}
      <div className="flex flex-col mt-10 w-full font-semibold">
        <div className="flex items-center justify-between  text-2xl">
          <span>Total Price</span>
          <span>$ {itemCart[0]?.cart?.totalMoney}</span>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
