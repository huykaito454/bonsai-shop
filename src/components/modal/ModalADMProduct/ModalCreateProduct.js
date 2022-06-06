import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getDataAdmin, postDataAdmin } from "../../../http/httpHandle";

const ModalCreateProduct = ({ onClose = () => {} }) => {
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
          <i className="fas fa-seedling text-3xl mr-5 "></i>
          Create Product
        </div>
        <FormCreateProduct></FormCreateProduct>
      </div>
    </div>
  );
};
const FormCreateProduct = () => {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState([]);
  const handleGetAllCategory = async () => {
    const data = await getDataAdmin("category");
    setCategory(data);
  };
  const handleFile = (data) => {
    const file = data.image[0];
    const formData = new FormData();
    return formData.append("image", file, file.name);
    // return URL.createObjectURL(file);
  };
  const onSubmit = (values, e) => {
    e.preventDefault();
    console.log(values);
    const image = new FormData(handleFile(values));
    const newData = {
      name: values.name,
      description: values.description,
      information: values.information,
      category: values.category,
      price: values.price,
      quantitySold: values.quantitySold,
      quantityStock: values.quantityStock,
      image: image,
    };
    console.log(newData);
    postDataAdmin("product", newData);
  };
  useEffect(() => {
    handleGetAllCategory();
  }, []);
  return (
    <form
      action=""
      className="flex flex-col items-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5 w-full">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
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
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
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
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
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
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
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
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          QUANTITY STOCK
        </label>
        <br></br>
        <input
          type="text"
          {...register("quantityStock")}
          className="p-3 w-full outline-none border focus:border-admin mt-2"
        />
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          QUANTITY SOLD
        </label>
        <br></br>
        <input
          type="text"
          {...register("quantitySold")}
          className="p-3 w-full outline-none border focus:border-admin mt-2"
        />
      </div>
      <div className="mb-5 w-full">
        <label htmlFor="" className=" text-gray-500 text-sm font-semibold">
          IMAGE
        </label>
        <br></br>
        <input
          type="file"
          {...register("image")}
          className="p-3 w-full outline-none border focus:border-admin mt-2"
        />
      </div>
      <div className="mb-5 w-full">
        <label className="text-gray-500 text-sm font-semibold">CATEGORY</label>
        <br></br>
        <select
          className="outline-none border px-4 py-2 mt-2"
          {...register("category")}
        >
          <option value={""}>Choose Category</option>
          {category.length > 0 &&
            category.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <button className="button w-[30%] mt-5 bg-admin">Confirm</button>
    </form>
  );
};
export default ModalCreateProduct;
