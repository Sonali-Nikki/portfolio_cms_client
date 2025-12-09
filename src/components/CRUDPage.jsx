import { useState, useEffect } from "react";
import AdminLayout from "../layouts/AdminLayout.jsx"

export default function CRUDPage({ title, api, fields }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({});
  const [editId, setEditId] = useState(null);

  // Initialize form with empty fields
  useEffect(() => {
    const emptyForm = {};
    fields.forEach((f) => (emptyForm[f.name] = ""));
    setForm(emptyForm);
  }, [fields]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await api.fetch();
      setItems(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await api.update(editId, form);
      } else {
        await api.create(form);
      }
      setEditId(null);
      resetForm();
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    const empty = {};
    fields.forEach((f) => (empty[f.name] = ""));
    setForm(empty);
  };

  const handleEdit = (item) => {
    const editForm = {};
    fields.forEach((f) => (editForm[f.name] = item[f.name] || ""));
    setForm(editForm);
    setEditId(item._id);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await api.delete(id);
      fetchItems();
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-6 space-y-2">
          {fields.map((f) =>
            f.type === "textarea" ? (
              <textarea
                key={f.name}
                placeholder={f.label}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="border p-2 w-full rounded"
              />
            ) : (
              <input
                key={f.name}
                type={f.type || "text"}
                placeholder={f.label}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="border p-2 w-full rounded"
              />
            )
          )}
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? "Update" : "Add"}
          </button>
        </form>

        {/* Items List */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item._id} className="border p-4 rounded flex justify-between">
                <div>
                  {fields.map((f) => (
                    <p key={f.name}>
                      <span className="font-bold">{f.label}: </span>
                      {item[f.name]}
                    </p>
                  ))}
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
