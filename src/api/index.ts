import axios from "axios";

export const axios_server = axios.create({
  baseURL: "https://tag-backend-xmx1.onrender.com/api/", //process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axios_server.interceptors.request.use(
  (config) => {
    if (typeof window === "undefined") return config;
    const token = localStorage.getItem("token");

    if (token && !config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // console.log(config, "config");

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios_server.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const status = error?.response?.status || 0;
    const resBaseURL = error?.response?.config?.baseURL;
    const currentBaseURL = process.env.NEXT_PUBLIC_API_URL;

    if (resBaseURL === currentBaseURL && status === 401) {
      // if (localStorage.getItem("token")) {
      //   localStorage.clear();
      //   window.location.assign("/");
      //   return Promise.reject(error);
      // } else {
      //   return Promise.reject(error);
      // }
    }
    return Promise.reject(error);
  }
);
