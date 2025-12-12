import { useEffect, useState } from "react";
import { getExperience, addExperience, deleteExperience } from "../../api/cmsApi.js";
import ExperienceForm from "../../components/CMS/ExperienceForm.jsx";

export default function ExperienceCMS() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    loadExperience();
  }, []);

  const loadExperience = async () => {
    const res = await getExperience();
    setExperience(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Experience</h1>

      <ExperienceForm
        onSubmit={async (formData) => {
          await addExperience(formData);
          loadExperience();
        }}
      />

      <ul className="mt-4 space-y-3 bg-orange-200 rounded">
        {experience.map((item) => (
          <li key={item._id} className="p-3 border rounded">
            <p><b>Role:</b> {item.role}</p>
            <p><b>Company:</b> {item.company}</p>
            <p><b>Duration:</b> {item.duration}</p>
            <p><b>Description:</b> {item.description}</p>

            <button
              onClick={async () => {
                await deleteExperience(item._id);
                loadExperience();
              }}
              className="text-orange-100 border-2 rounded px-2 bg-red-500 mt-2 block"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
