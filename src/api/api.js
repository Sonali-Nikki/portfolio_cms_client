
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// Attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto Refresh Token
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status === 401) {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/refresh", {
          withCredentials: true,
        });

        localStorage.setItem("token", res.data.token);

        err.config.headers.Authorization = `Bearer ${res.data.token}`;
        return api(err.config);
      } catch (e) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

export default api;

