import React from "react";

const Blog = ({ title, content, url, reverse }) => {
  return (
    <div className="w-full page-container mb-20 px-10">
      <div
        className={`flex items-center justify-between ${
          reverse ? "flex-row-reverse" : ""
        } `}
      >
        <div className="blog-content w-[45%] mx-10">
          <h1 className="text-4xl font-semibold mb-8">{title}</h1>
          <p className=" text-base mb-10">{content}</p>
        </div>
        <div className="flex-1 shrink-0 ">
          <img src={url} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
