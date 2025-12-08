import { useEffect, useState } from "react";
import { getAbout, updateAbout } from "../../api/cmsApi";
import AboutForm from "../../components/CMS/AboutForm";

export default function AboutCMS() {
  const [data, setData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getAbout();
    setData(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage About Section</h1>

      {editMode ? (
        <AboutForm 
          defaultData={data} 
          onSubmit={async (formData) => {
            await updateAbout(formData);
            setEditMode(false);
            fetchData();
          }} 
        />
      ) : (
        <div>
          <p>{data?.description}</p>
          <button onClick={() => setEditMode(true)} className="btn">Edit</button>
        </div>
      )}
    </div>
  );
}
