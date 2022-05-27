import React from "react";

const Footer = () => {
  return (
    <section className="footer page-container w-full my-10 bg-footer">
      <div className="footer-top flex items-start justify-start py-10 px-14  transition-all ">
        <div className="flex items-center justify-start">
          <div className="footer-top-img rounded-full mr-14 ">
            <img
              src="https://cdn.shopify.com/s/files/1/0150/6262/files/the-sill-84-hester_222x222_crop_center.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="footer-top-content flex flex-col">
            <h1 className="text-4xl font-semibold">
              Visit Us In A Store Near You
            </h1>
            <p className="my-5">
              Our stores around the VietNam are open for socially distanced
              shopping, curbside pickup, in-person workshops and more!
            </p>
          </div>
        </div>
        <div className="footer-bottom-email flex flex-col w-[30%] ml-14">
          <h1 className="text-4xl font-semibold">Send the contact</h1>
          <p className="py-5"></p>
          <form className="mb-5">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-4 w-full mb-5 outline-none"
            />
            <input
              type="text"
              placeholder="Type your question"
              className="p-4 w-full mb-5 outline-none"
            />
            <div className="button">
              <i className="fas fa-paper-plane"></i>
            </div>
          </form>
          <div className="social w-[55%] flex items-center justify-between text-2xl">
            <span className="">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
            <span>
              <i className="fab fa-youtube"></i>
            </span>
            <span>
              <i className="fab fa-tiktok"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-desc">
        <div className="my-1 mx-14 border-t-2 "></div>
        <div className="flex items-center justify-between py-5 px-14 text-sm ">
          <h1 className="w-[50%]">Copyright 2022 NHL, Inc.</h1>
          <div className="footer-term flex items-center justify-between flex-1 shrink-0">
            <p>Nguyễn Trọng Huy 19110217</p>
            <p>Phạm Thanh Lợi 19110239</p>
            <p>Nguyễn Minh Nhật 19110256</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
