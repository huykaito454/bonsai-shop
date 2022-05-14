import React from "react";
const ADMDashBoardPage = () => {
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">DASHBOARD</div>
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col p-8 shadow-md rounded-sm">
            <div className="flex items-center justify-between text-base text-gray-500 mb-10">
              <div className="uppercase font-semibold">Top Rated</div>
              <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="flex flex-col">
              <TopProduct></TopProduct>
              <TopProduct></TopProduct>
              <TopProduct></TopProduct>
              <TopProduct></TopProduct>
              <TopProduct></TopProduct>
            </div>
          </div>
          <div className="flex flex-col p-8 shadow-md rounded-sm">
            <div className="flex items-center justify-between text-base text-gray-500 mb-10">
              <div className="uppercase font-semibold">Revenue</div>
              <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="flex flex-col justify-between">
              <Revenue></Revenue>
            </div>
          </div>
          <div className="flex flex-col p-8 shadow-md rounded-sm">
            <div className="flex items-center justify-between text-base text-gray-500 mb-10">
              <div className="uppercase font-semibold">Top User Point</div>
              <i className="fas fa-ellipsis-v"></i>
            </div>
            <div className="flex items-center justify-between h-full">
              <TopUser></TopUser>
              <TopUser></TopUser>
              <TopUser></TopUser>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const TopProduct = () => {
  return (
    <div className="text-gray-600 flex items-center mb-4">
      <span className="mr-2 text-sm">1</span>
      <span className="mr-5 w-[25%] text-sm">Monstera </span>
      <div className="flex-1 shrink-0 bg-white w-full rounded-sm">
        <div className="w-[70%] bg-red-400 text-center text-white rounded-sm">
          70%
        </div>
      </div>
    </div>
  );
};

const Revenue = () => {
  return (
    <>
      <div className="text-5xl text-admin mb-14 font-semibold">12000000 $</div>
      <div className="flex items-center justify-between mb-auto">
        <span className="text-gray-500">Total Product Sold</span>
        <span className="text-red-400 font-semibold">590</span>
      </div>
    </>
  );
};
const TopUser = () => {
  return (
    <>
      <div className="flex flex-col w-[25%] h-full">
        <span className="text-center mb-4">User 1</span>
        <div className="flex-1 shrink-0 bg-white h-full rounded-sm flex flex-col justify-end ">
          <div className="bg-red-400 h-[100%] text-center text-white rounded-sm "></div>
        </div>
      </div>
    </>
  );
};
export default ADMDashBoardPage;
