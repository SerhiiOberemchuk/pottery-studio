import Axios from "axios";
import { API_URL } from "./axios-constants";

export const api = Axios.create({
  baseURL: API_URL.URL_BACKEND,
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(API_URL.ACCESS_TOKEN);
    if (accessToken) {
      config.headers.common[
        "Authorization"
      ] = `${API_URL.BEARER} ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
