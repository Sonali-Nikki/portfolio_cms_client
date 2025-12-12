import { useEffect, useState } from "react";
import { getAbout, updateAbout } from "../api/cmsApi.js";
import AboutForm from "../components/CMS/AboutForm.jsx";

export default function AboutCMS() {
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await getAbout();
    setData(res);
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage About Section</h1>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : editMode ? (
        <AboutForm
          defaultData={data}
          onSubmit={async (formData) => {
            await updateAbout(formData);
            setEditMode(false);
            fetchData();
          }}
        />
      ) : (
        <div className="bg-white p-4 border rounded mt-4 space-y-3  shadow-md">
          <p className="text-gray-800 border-4 pl-2 border-gray-400 leading-relaxed">
            {data?.description || "No about description added yet."}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit About
          </button>
        </div>
      )}
    </div>
  );
}
