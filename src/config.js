export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
};

const endPoint = "http://localhost:8080";
export const API = {
  getAPI: (type) => `${endPoint}/${type}`,
  getAPIAdmin: (type) => `${endPoint}/admin/${type}`,
};
