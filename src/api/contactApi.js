import api from "./api.js";

// CONTACT
export const getContact = async () => {
  const res = await api.get("/cms/contact");
  return res.data;
};

export const updateContact = async (data) => {
  const res = await api.put("/cms/contact", data);
  return res.data;
};
