import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API, config } from "../config";
//Handle Guest
import { toast } from "react-toastify";
export const getGuestData = async (type, page = 1, limit = 12) => {
  try {
    const res = await axios.get(API.getAPI(type), {
      params: { page: page, limit: limit },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
//Handle User
export const getData = async (type) => {
  try {
    const res = await axios.get(API.getAPI(type), config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getSearch = async (type, keyword) => {
  try {
    const res = await axios.get(API.getAPI(type), {
      params: { keyword: keyword },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const paymentData = async (type, data) => {
  try {
    const res = await axios.post(API.getAPI(type), data, config);
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const getUserData = async (type, page = 1, limit = 10) => {
  try {
    const res = await axios.get(API.getAPI(type), {
      params: { page: page, limit: limit },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const addToCart = async (type, data, productId) => {
  try {
    const res = await axios.post(API.getAPI(type), data, {
      params: { product_id: productId },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const putToCart = async (type, data, productId, quantity) => {
  try {
    const res = await axios.put(API.getAPI(type), data, {
      params: { product_id: productId, quantity: quantity },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const removeToCart = async (type, productId) => {
  try {
    const res = await axios.delete(API.getAPI(type), {
      params: { product_id: productId },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
//HandleAdmin
export const getDataAdmin = async (type, page = 1, limit = 8) => {
  try {
    const res = await axios.get(API.getAPIAdmin(type), {
      params: { page: page, limit: limit },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const postDataAdmin = async (type, data) => {
  try {
    const res = await axios.post(API.getAPIAdmin(type), data, config);
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const postDataProductAdmin = async (type, data, config) => {
  try {
    const res = await axios.post(API.getAPIAdmin(type), data, config);
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const putDataProductAdmin = async (type, data, config) => {
  try {
    const res = await axios.put(API.getAPIAdmin(type), data, config);
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const cancelOrderAdmin = async (type, data, id) => {
  try {
    const res = await axios.put(API.getAPIAdmin(type), data, {
      params: { id_order: id },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const assignShipper = async (type, data, idShipper, idOrder) => {
  try {
    const res = await axios.put(API.getAPIAdmin(type), data, {
      params: { id_shipper: idShipper, id_order: idOrder },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const putDataAdmin = async (type, data) => {
  try {
    const res = await axios.put(API.getAPIAdmin(type), data, config);
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
export const deleteDataAdmin = async (type) => {
  try {
    const res = await axios.delete(API.getAPIAdmin(type), config);
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } catch (error) {
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
//Handler Shipper
export const getShipperData = async (type, page = 1, limit = 10) => {
  try {
    const res = await axios.get(API.getAPIShipper(type), {
      params: { page: page, limit: limit },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const deliveryOrderShipper = async (type, data, id) => {
  try {
    const res = await axios.put(API.getAPIShipper(type), data, {
      params: { id_order: id },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    toast.success(res.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return res.data;
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message, {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};
