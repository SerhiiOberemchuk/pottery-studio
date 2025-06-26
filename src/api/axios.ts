import Axios from "axios";
import { API_URL } from "./axios-constants";

export const api = Axios.create({
  baseURL: API_URL.URL_BACKEND,
});

api.interceptors.request.use(
  (config) => {
    const raw = localStorage.getItem("auth-storage");
    if (raw) {
      const parsed = JSON.parse(raw);
      const accessToken = parsed?.state?.tokens?.[API_URL.ACCESS_TOKEN];
      if (accessToken) {
        config.headers = config.headers || {};
        config.headers.Authorization = `${API_URL.BEARER} ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const raw = localStorage.getItem("auth-storage");
//         const parsed = raw ? JSON.parse(raw) : null;
//         const refreshToken = parsed?.state?.tokens?.refresh_token;

//         if (!refreshToken) {
//           return Promise.reject(error);
//         }

//         const res = await api.post("/auth/refresh", {
//           refresh_token: refreshToken,
//         });

//         const newAccessToken = res.data.access_token;

//         parsed.state.tokens.access_token = newAccessToken;
//         localStorage.setItem("auth-storage", JSON.stringify(parsed));

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error("Ошибка обновления токена:", refreshError);
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );
