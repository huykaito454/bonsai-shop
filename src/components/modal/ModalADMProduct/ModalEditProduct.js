import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDataAdmin, putDataProductAdmin } from "../../../http/httpHandle";

const ModalEditProduct = ({ onClose = () => {}, id }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const handleGetProduct = async () => {
    const data = await getDataAdmin(`product/${id}`);
    handleDefaultValues(data.data);
    setProduct(data.data);
  };
  const handleGetAllCategory = async () => {
    const data = await getDataAdmin("category");
    setCategory(data);
  };
  const handleDefaultValues = (data) => {
    for (const [key, value] of Object.entries(data)) {
      setValue(key, value);
    }
  };
  const dataURLtoFile = (dataUrl, filename) => {
    var arr = dataUrl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };
  const onSubmit = (values, e) => {
    e.preventDefault();
    const file = new FormData();
    if (values.file.length > 0) {
      file.append("file", values?.file[0]);
    } else {
      const fileImageOld = dataURLtoFile(
        `data:text/plain;base64,${values.image}`,
        "img.txt"
      );
      file.append("file", fileImageOld);
    }
    const product = {
      name: values.name,
      description: values.description,
      information: values.information,
      category: values.category.id,
      price: values.price,
      quantitySold: values.quantitySold,
      quantityStock: values.quantityStock,
    };
    putDataProductAdmin(`product/${id}`, file, {
      params: { product: product, file: file },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
  };
  useEffect(() => {
    handleGetProduct();
    handleGetAllCategory();
  }, []);
  return (
    <div className="bg-white p-10 rounded-md w-full max-w-[1200px] max-h-[600px] overflow-scroll">
      <span
        className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
        onClick={onClose}
      >
        <i className="fas fa-times text-xl text-admin"></i>
      </span>
      <div className="modal-content font-body2 w-[800px]">
        <div className=" text-admin text-3xl font-semibold mb-7 uppercase">
          <i className="fas fa-edit text-3xl mr-5 "></i>
          Edit Product
        </div>
        <form
          action=""
          className="flex items-start justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col items-end w-[50%]">
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                PRODUCT NAME
              </label>
              <br></br>
              <input
                type="text"
                {...register("name")}
                className="p-3 w-full outline-none border focus:border-admin mt-2"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                DESCRIPTION
              </label>
              <br></br>
              <textarea
                type="text"
                {...register("description")}
                className="p-3 w-full outline-none border focus:border-admin mt-2 resize-none"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                INFORMATION
              </label>
              <br></br>
              <textarea
                type="text"
                {...register("information")}
                className="p-3 w-full outline-none border focus:border-admin mt-2 resize-none"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                SOLD
              </label>
              <br></br>
              <input
                type="text"
                {...register("quantitySold")}
                className="p-3 w-full outline-none border focus:border-admin mt-2"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                IN STOCK
              </label>
              <br></br>
              <input
                type="text"
                {...register("quantityStock")}
                className="p-3 w-full outline-none border focus:border-admin mt-2"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                PRICE
              </label>
              <br></br>
              <input
                type="text"
                {...register("price")}
                className="p-3 w-full outline-none border focus:border-admin mt-2"
              />
            </div>
            <div className="mb-5 w-full">
              <label
                htmlFor=""
                className=" text-gray-500 text-sm font-semibold"
              >
                UPDATE IMAGE
              </label>
              <br></br>
              <input
                type="file"
                {...register("file")}
                className="p-3 w-full outline-none border focus:border-admin mt-2"
              />
            </div>
            <div className="mb-5 w-full">
              <label className="text-gray-500 text-sm font-semibold">
                CATEGORY
              </label>
              <br></br>
              <select
                {...register("category.id")}
                className="outline-none border px-4 py-2 mt-2"
                default={product?.category?.name}
              >
                {category.length > 0 &&
                  category.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <button className="button w-[30%] mt-5 bg-admin">Confirm</button>
          </div>
          <div className="w-[45%]">
            <img
              src={`data:image/png;base64, ${product.image}`}
              alt=""
              className="w-full object-cover"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProduct;
