import React, { useEffect, useState } from "react";
import ModalCreateAccount from "../components/modal/ModalADMAccount/ModalCreateAccount";
import ModalEditAccount from "../components/modal/ModalADMAccount/ModalEditAccount";
import ModalInforAccount from "../components/modal/ModalADMAccount/ModalInforAccount";
import ModalAdvanced from "../components/modal/ModalAdvanced";
import { deleteDataAdmin, getDataAdmin } from "../http/httpHandle";
const ADMAccountPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  const [account, setAccount] = useState([]);
  const [idUser, setIdUser] = useState("");
  const [idFind, setIdFind] = useState();
  const [selectValue, setSelectValue] = useState(null);
  const handleGetAllAccount = async () => {
    const getData = await getDataAdmin("account");
    const data = getData.data.list;
    if (selectValue) {
      const dataSortByRole = data.filter((item) => {
        const dataRole = item.roles.filter((item) => {
          return item.id === Number(selectValue);
        });
        if (dataRole.length > 0) {
          return item;
        }
      });
      setAccount(dataSortByRole);
    } else if (idFind) {
      const dataFind = data.filter((item) => {
        return item.id === Number(idFind);
      });
      setAccount(dataFind);
    } else {
      setAccount(data);
    }
  };
  const handleDeleteAccount = (id) => {
    let confirmAction = window.confirm("Are you sure to delete this account?");
    if (confirmAction) {
      deleteDataAdmin(`account/${id}`);
    } else return;
  };
  useEffect(() => {
    handleGetAllAccount();
  }, [idFind, selectValue]);

  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-users text-4xl mr-5"></i>
          ACCOUNT MANAGEMENT
        </div>
        <div className="flex justify-between mb-7">
          <div className="flex items-center justify-start">
            <span className="mr-3">New Account</span>
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
              placeholder="Find Account"
              value={idFind}
              onChange={(e) => setIdFind(e.target.value)}
            />
            <button className="button-admin px-4 py-1 border border-admin">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center justify-start">
            <span className="mr-3">Filter By Role</span>
            <select
              className="outline-none border border-adminBorder rounded-md px-2 py-1"
              defaultValue={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="">All</option>
              <option value={2}>User</option>
              <option value={1}>Admin</option>
              <option value={3}>Shipper</option>
            </select>
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
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {account.length > 0 &&
                account.map((item) => (
                  <TableAccount
                    item={item}
                    key={item.id}
                    handleDeleteAccount={handleDeleteAccount}
                    setChoice={setChoice}
                    setIdUser={setIdUser}
                    setOpenModal={setOpenModal}
                  ></TableAccount>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        {choice === "new" && (
          <ModalCreateAccount
            onClose={() => setOpenModal(false)}
          ></ModalCreateAccount>
        )}
        {choice === "info" && (
          <ModalInforAccount
            onClose={() => setOpenModal(false)}
            id={idUser}
          ></ModalInforAccount>
        )}
        {choice === "edit" && (
          <ModalEditAccount
            onClose={() => setOpenModal(false)}
            id={idUser}
          ></ModalEditAccount>
        )}
      </ModalAdvanced>
    </>
  );
};

const TableAccount = ({
  item,
  handleDeleteAccount = () => {},
  setOpenModal = () => {},
  setChoice = () => {},
  setIdUser = () => {},
}) => {
  return (
    <tr className="bg-white border-b text-gray-700 border-admin">
      <td className="px-6 py-4">{item.id}</td>
      <td className="px-6 py-4">{item.firstName}</td>
      <td className="px-6 py-4">{item.lastName}</td>
      <td className="px-6 py-4">{item.email}</td>
      <td className="px-6 py-4">{item.phone}</td>
      <td className="px-6 py-4">{item.address}</td>
      <td className="px-6 py-4">
        {item.roles.map((item) => (
          <p key={item.id}>{item.roleName}</p>
        ))}
      </td>
      <td className="px-6 py-4 flex items-center justify-between">
        <button
          className="button-admin py-2 px-4 rounded-md bg-yellow-500"
          onClick={() => {
            setOpenModal(true);
            setChoice("info");
            setIdUser(item.id);
          }}
        >
          <i className="fas fa-info-circle"></i>
        </button>
        <button
          className="button-admin py-2 px-4 rounded-md"
          onClick={() => {
            setOpenModal(true);
            setChoice("edit");
            setIdUser(item.id);
          }}
        >
          <i className="fas fa-edit"></i>
        </button>
        <button
          className="button-admin py-2 px-4 rounded-md bg-red-500"
          onClick={() => {
            handleDeleteAccount(item.id);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};
export default ADMAccountPage;
