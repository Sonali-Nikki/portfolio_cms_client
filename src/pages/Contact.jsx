import { useEffect, useState } from "react";
import { getContact, updateContact } from "../api/contactApi.js";
import ContactForm from "../components/CMS/ContactForm.jsx";

export default function ContactCMS() {
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getContact();
    setData(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Contact Section</h1>

      {editMode ? (
        <ContactForm
          defaultData={data}
          onSubmit={async (formData) => {
            await updateContact(formData);
            setEditMode(false);
            fetchData();
          }}
        />
      ) : (
        <div className="space-y-2 bg-white p-4 rounded shadow">
          <p><strong>Email:</strong> {data?.email}</p>
          <p><strong>Phone:</strong> {data?.phone}</p>
          <p><strong>Address:</strong> {data?.address}</p>

          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
