
import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-cms-server-02po.onrender.com/api",
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
        const res = await axios.get("https://portfolio-cms-server-02po.onrender.com/api/auth/refresh", {
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


// CRUD functions
export const blogsAPI = {
  fetch: () => api.get("/blogs"),
  create: (data) => api.post("/blogs", data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

export const testimonialsAPI = {
  fetch: () => api.get("/testimonials"),
  create: (data) => api.post("/testimonials", data),
  update: (id, data) => api.put(`/testimonials/${id}`, data),
  delete: (id) => api.delete(`/testimonials/${id}`),
};

export const experienceAPI = {
  fetch: () => api.get("/experience"),
  create: (data) => api.post("/experience", data),
  update: (id, data) => api.put(`/experience/${id}`, data),
  delete: (id) => api.delete(`/experience/${id}`),
};

export const servicesAPI = {
  fetch: () => api.get("/services"),
  create: (data) => api.post("/services", data),
  update: (id, data) => api.put(`/services/${id}`, data),
  delete: (id) => api.delete(`/services/${id}`),
};