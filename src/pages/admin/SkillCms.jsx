import { useEffect, useState } from "react";
import { getSkills, addSkill, deleteSkill } from "../../api/cmsApi.js";
import SkillsForm from "../../components/CMS/SkillForm.jsx";

export default function SkillsCMS() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    const res = await getSkills();
    setSkills(res);
  };

  return (
    <div>
      <h1 className="text-2xl mb-2 font-bold">Manage Skills</h1>

      <SkillsForm 
        onSubmit={async (formData) => {
          await addSkill(formData);
          loadSkills();
        }}
      />

      <ul className="mt-4 bg-orange-200 rounded ">
        {skills.map((skill) => (
          <li key={skill._id} className="flex justify-between">
            {skill.name}
            <button 
              onClick={async () => {
                await deleteSkill(skill._id);
                loadSkills();
              }}
              className="text-orange-100 border-2 rounded px-2 mt-2 bg-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
