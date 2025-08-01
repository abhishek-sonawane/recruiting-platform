import axios from "axios";

const userData = localStorage.getItem("userData");
const token = userData ? JSON.parse(userData)?.token : null;

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_ENDPOINT}`,
  // headers: {
  //   Authorization: `bearer ${token}`,
  //   "Content-Type": "application/json",
  // },
});

api.interceptors.request.use(async (config) => {
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`, 
      Accept: "*",
    };
  }
  return config;
});

export default api;
