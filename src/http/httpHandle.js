import axios from "axios";
import { API, config } from "../config";
//Handle User
export const getData = async (type) => {
  try {
    const res = await axios.get(API.getData(type), config);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
//HandleAdmin
export const getDataAdmin = async (type) => {
  try {
    const res = await axios.get(API.getAPIAdmin(type), config);
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
