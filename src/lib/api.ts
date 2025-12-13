import axios from "axios";
import nProgress from "nprogress";

const api = axios.create({
  baseURL:
    (process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337") +
    "/api",
  timeout: 10000,
});

// Client-side only
if (typeof window !== "undefined") {
  let requestCount = 0;

  const startProgress = () => {
    if (requestCount === 0) nProgress.start();
    requestCount++;
  };

  const stopProgress = () => {
    requestCount--;
    if (requestCount <= 0) {
      nProgress.done();
      requestCount = 0;
    }
  };

  api.interceptors.request.use(
    (config) => {
      startProgress();

      // Prevent: Cannot set headers of undefined
      config.headers = config.headers || {};

      // Optional: inject token
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      stopProgress();
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response) => {
      stopProgress();
      return response;
    },
    (error) => {
      stopProgress();

      // Optional: error handling umum
      if (error.code === "ECONNABORTED") {
        console.error("⏳ Request timeout");
      }
      if (!error.response) {
        console.error("🌐 Network error");
      }

      return Promise.reject(error);
    }
  );
}

export default api;
