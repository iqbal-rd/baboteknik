import axios from "axios";
import NProgress from "nprogress";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SCRIPT_GOOGLE_URL || "http://localhost:3001/api",
  timeout: 10000,
});

let requestCount = 0;

if (typeof window !== "undefined") {
  const startProgress = () => {
    if (requestCount === 0) NProgress.start();
    requestCount++;
  };

  const stopProgress = () => {
    requestCount--;
    if (requestCount <= 0) {
      NProgress.done();
      requestCount = 0;
    }
  };

  api.interceptors.request.use((config) => {
    startProgress();
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      stopProgress();
      return response;
    },
    (error) => {
      stopProgress();
      return Promise.reject(error);
    }
  );
}

export default api;
