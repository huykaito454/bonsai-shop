import React, { useState } from "react";
import { useEffect } from "react";
import ModalInforOrder from "../components/modal/ModalADMOrder/ModalInforOrder";
import ModalShipOrder from "../components/modal/ModalADMOrder/ModalShipOrder";
import ModalAdvanced from "../components/modal/ModalAdvanced";
import { getDataAdmin } from "../http/httpHandle";

const ADMOrdersPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [choice, setChoice] = useState("");
  const [idOrder, setIdOrder] = useState();
  const [order, setOrder] = useState([]);
  const handleGetOrder = async () => {
    const data = await getDataAdmin("order");
    setOrder(data.data.list);
    console.log(data.data.list);
  };
  useEffect(() => {
    handleGetOrder();
  }, []);
  return (
    <>
      <div className="h-[80px] w-full"></div>
      <div className="page-container-admin font-body2">
        <div className=" text-admin text-4xl font-semibold mb-7">
          <i className="fas fa-file-alt mr-5 text-4xl"></i>
          ORDERS MANAGEMENT
        </div>
        <div className="flex justify-between ">
          <div className="flex items-center justify-start">
            <select className="outline-none border border-adminBorder rounded-md px-2 py-1">
              <option>All Status</option>
              <option value="">Unconfirmed</option>
              <option value="">Processing</option>
              <option value="">Successful</option>
            </select>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="text"
              className="outline-none px-2 mr-3 rounded-md py-1 border focus:border-admin"
              placeholder="Find Order"
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
                  Order Date
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Money
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {order.length > 0 &&
                order.map((item) => (
                  <TableOrders
                    key={item.id}
                    item={item}
                    setChoice={setChoice}
                    setIdOrder={setIdOrder}
                    setOpenModal={setOpenModal}
                  ></TableOrders>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalAdvanced visible={openModal} onClose={() => setOpenModal(false)}>
        {choice === "info" && (
          <ModalInforOrder
            onClose={() => setOpenModal(false)}
            id={idOrder}
          ></ModalInforOrder>
        )}
        {choice === "ship" && (
          <ModalShipOrder onClose={() => setOpenModal(false)}></ModalShipOrder>
        )}
      </ModalAdvanced>
    </>
  );
};
const TableOrders = ({
  item,
  setOpenModal = () => {},
  setChoice = () => {},
  setIdOrder = () => {},
}) => {
  return (
    <tr className="bg-white border-b text-gray-700 border-admin">
      <td className="px-6 py-4">{item.orderDate}</td>
      <td className="px-6 py-4">{item.id}</td>
      <td className="px-6 py-4">{item.receiverName}</td>
      <td className="px-6 py-4">{item.receiverPhone}</td>
      <td className="px-6 py-4">{item.totalMoney}</td>
      <td className="px-6 py-4">{item.status}</td>
      <td className="px-6 py-4 flex items-center justify-between">
        <button
          className="button-admin py-2 px-4 rounded-md bg-yellow-500"
          onClick={() => {
            setOpenModal(true);
            setChoice("info");
            setIdOrder(item.id);
          }}
        >
          <i className="fas fa-info-circle"></i>
        </button>
        <button
          className="button-admin py-2 px-4 rounded-md"
          onClick={() => {
            setOpenModal(true);
            setChoice("ship");
          }}
        >
          <i className="fas fa-truck"></i>
        </button>
        <button className="button-admin py-2 px-4 rounded-md bg-red-500">
          <i className="fas fa-trash-alt"></i>
        </button>
      </td>
    </tr>
  );
};
export default ADMOrdersPage;
