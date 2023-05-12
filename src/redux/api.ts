import axios from "axios";

let baseURL = process.env.REACT_APP_BASE_API_SERVER;

if (process.env.NODE_ENV === "development") {
  console.log(".env.MODE :", process.env.NODE_ENV);
  baseURL = process.env.REACT_APP_BASE_API_SERVER;
} else {
  console.log(".env.MODE : ", process.env.NODE_ENV);
  baseURL = process.env.REACT_APP_BASE_API_PRODUCTION_SERVER;
}

export const api = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: baseURL,
});
console.log("baseURL :", baseURL);
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authToken")
    ? localStorage.getItem("authToken")
    : null;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
