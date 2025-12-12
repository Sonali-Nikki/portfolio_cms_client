import { useState } from "react";

export default function ContactForm({ defaultData, onSubmit }) {
  const [form, setForm] = useState({
    email: defaultData?.email || "",
    phone: defaultData?.phone || "",
    address: defaultData?.address || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
}
