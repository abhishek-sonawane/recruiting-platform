import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_ENDPOINT}`,
  headers: {
    Authorization: `bearer ${
      JSON.parse(localStorage.getItem("userData"))?.token
    }`,
    "Content-Type": "application/json",
  },
});

export default api;
