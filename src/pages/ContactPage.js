import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full page-container p-10">
      <p className=" text-gray-600 mb-5 font-semibold">LOCATIONS</p>
      <h1 className="text-6xl font-semibold w-[70%] mb-5">Store Locations</h1>
      <StoreAddresses
        city={"Viet Nam"}
        address={"Thu Duc District, Ho Chi Minh City"}
      ></StoreAddresses>
    </div>
  );
};

const StoreAddresses = ({ city, address }) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold mb-5 ">{city}</h1>
      <h1 className="text-2xl font-semibold mb-5 text-primary ">{address}</h1>
    </div>
  );
};

export default ContactPage;
