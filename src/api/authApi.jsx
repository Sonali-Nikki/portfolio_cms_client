import api from "./api.js";

export const loginAdmin = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    console.log(res)
    localStorage.setItem("token", res.data.token);
    return res.data;
  } catch (err) {
    console.log(err.response?.data?.message);
    throw err;
  }
};



export const registerUser = (data) =>
  api.post("/auth/register", data);