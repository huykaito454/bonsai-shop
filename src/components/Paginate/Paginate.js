import React from "react";

const Paginate = ({ nextPage, totalPage, setNextPage = () => {}, style }) => {
  return (
    <div
      className="flex items-center justify-center text-primary mt-12 mb-5"
      style={style}
    >
      <i
        className="fas fa-angle-left text-3xl cursor-pointer"
        onClick={() => {
          if (nextPage === 1) return;
          else {
            setNextPage(nextPage - 1);
          }
        }}
      ></i>
      <div className="flex items-center justify-center text-3xl mx-2">
        {new Array(totalPage).fill(0).map((item, index) => (
          <span
            key={index}
            className="mx-2 cursor-pointer"
            onClick={() => {
              setNextPage(index + 1);
            }}
          >
            {index + 1}
          </span>
        ))}
      </div>
      <i
        className="fas fa-angle-right text-3xl cursor-pointer"
        onClick={() => {
          if (nextPage === totalPage) return;
          else {
            setNextPage(nextPage + 1);
          }
        }}
      ></i>
    </div>
  );
};

export default Paginate;
