import React from "react";

const ModalRepSupport = ({ onClose = () => {} }) => {
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
          <i className="fas fa-paper-plane text-3xl mr-5 "></i>
          Rep Email
        </div>
        <form action="" className="flex flex-col items-end">
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              EMAIL
            </label>
            <br></br>
            <input
              type="text"
              className="p-3 w-full outline-none border focus:border-admin mt-2"
            />
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              CONTENT EMAIL
            </label>
            <br></br>
            <span className="pt-3 w-full mt-2 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus eligendi nemo quos, assumenda laborum quisquam illo ut
              deserunt maxime eius dolor laboriosam autem obcaecati reiciendis
              repudiandae aliquam voluptatibus repellendus omnis.
            </span>
          </div>
          <div className="mb-5 w-full">
            <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
              CONTENT
            </label>
            <br></br>
            <textarea
              type="text"
              className="p-3 w-full outline-none border focus:border-admin mt-2 resize-none"
            />
          </div>
          <button className="button w-[30%] mt-5 bg-admin">
            <i className="fas fa-paper-plane text-xl"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalRepSupport;
