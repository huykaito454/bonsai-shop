import React, { useEffect, useState } from "react";
import ModalCreateCategory from "../components/modal/ModalADMCategory/ModalCreateCategory";
import ModalEditCategory from "../components/modal/ModalADMCategory/ModalEditCategory";
import ModalInforCategory from "../components/modal/ModalADMCategory/ModalInforCategory";
import ModalAdvanced from "../components/modal/ModalAdvanced";
import { deleteDataAdmin, getDataAdmin } from "../http/httpHandle";
const ADMCategoryPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  const [idCategory, setIdCategory] = useState();
  const [category, setCategory] = useState([]);
  const handleGetAllCategory = async () => {
    const data = await getDataAdmin("category");
    setCategory(data);
  };
  const handleDeleteCategory = (id) => {
    let confirmAction = window.confirm("Are you sure to delete this category?");
    if (confirmAction) {
      deleteDataAdmin(`category/${id}`);
    } else return;
  };
  useEffect(() => {
    handleGetAllCategory();
  }, []);
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-list-ul mr-5 text-4xl"></i>
          CATEGORY MANAGEMENT
        </div>
        <div className="flex justify-between mb-7">
          <div className="flex items-center justify-start">
            <span className="mr-3">New Category</span>
            <button
              className="button-admin px-4 py-1 border border-admin"
              onClick={() => {
                setOpenModal(true);
                setChoice("new");
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="text"
              className="outline-none px-2 mr-3 rounded-md py-1 border focus:border-admin"
              placeholder="Find Category"
            />
            <button className="button-admin px-4 py-1 border border-admin">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-12 mb-5 border  border-b-0 border-admin">
          <table className="w-full text-sm text-left text-white bg-admin">
            <thead className="text-xs text-white uppercase bg-admin">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {category.length > 0 &&
                category.map((item) => (
                  <TableCategory
                    key={item.id}
                    item={item}
                    setOpenModal={setOpenModal}
                    setChoice={setChoice}
                    setIdCategory={setIdCategory}
                    handleDeleteCategory={handleDeleteCategory}
                  ></TableCategory>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        {choice === "new" && (
          <ModalCreateCategory
            onClose={() => setOpenModal(false)}
          ></ModalCreateCategory>
        )}
        {choice === "info" && (
          <ModalInforCategory
            onClose={() => setOpenModal(false)}
            id={idCategory}
          ></ModalInforCategory>
        )}
        {choice === "edit" && (
          <ModalEditCategory
            onClose={() => setOpenModal(false)}
            id={idCategory}
          ></ModalEditCategory>
        )}
      </ModalAdvanced>
    </>
  );
};

const TableCategory = ({
  item,
  setOpenModal = () => {},
  setChoice = () => {},
  setIdCategory = () => {},
  handleDeleteCategory = () => {},
}) => {
  return (
    <tr className="bg-white border-b text-gray-700 border-admin">
      <td className="px-6 py-4">{item.id}</td>
      <td className="px-6 py-4">{item.name}</td>
      <td className="px-6 py-4 text-justify">{item.description}</td>
      <td className="px-6 py-4 flex items-center justify-between">
        <button
          className="button-admin py-2 px-4 rounded-md bg-yellow-500"
          onClick={() => {
            setOpenModal(true);
            setChoice("info");
            setIdCategory(item.id);
          }}
        >
          <i className="fas fa-info-circle"></i>
        </button>
        <button
          className="button-admin py-2 px-4 rounded-md"
          onClick={() => {
            setOpenModal(true);
            setChoice("edit");
            setIdCategory(item.id);
          }}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="button-admin py-2 px-4 rounded-md bg-red-500"
          onClick={() => {
            handleDeleteCategory(item.id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};
export default ADMCategoryPage;
