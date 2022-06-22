import axios from "axios";
import { API, config } from "../config";
//Handle Guest
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
    alert(res.data.message);
    return res.data;
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};
//HandleAdmin
export const getDataAdmin = async (type, page = 1, limit = 10) => {
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
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};
export const postDataProductAdmin = async (type, data, config) => {
  try {
    const res = await axios.post(API.getAPIAdmin(type), data, config);
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const putDataProductAdmin = async (type, data, config) => {
  try {
    const res = await axios.put(API.getAPIAdmin(type), data, config);
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message);
  }
};
export const putDataAdmin = async (type, data) => {
  try {
    const res = await axios.put(API.getAPIAdmin(type), data, config);
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    alert(error.response.data.message);
  }
};
export const deleteDataAdmin = async (type) => {
  try {
    const res = await axios.delete(API.getAPIAdmin(type), config);
    alert(res.data.message);
    window.location.reload(false);
  } catch (error) {
    alert(error.response.data.message);
  }
};
