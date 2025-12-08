import { useEffect, useState } from "react";
import { getSkills, addSkill, deleteSkill } from "../../api/cmsApi";
import SkillsForm from "../../components/CMS/SkillsForm";

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
      <h1 className="text-2xl font-bold">Manage Skills</h1>

      <SkillsForm 
        onSubmit={async (formData) => {
          await addSkill(formData);
          loadSkills();
        }}
      />

      <ul className="mt-4">
        {skills.map((skill) => (
          <li key={skill._id} className="flex justify-between">
            {skill.name}
            <button 
              onClick={async () => {
                await deleteSkill(skill._id);
                loadSkills();
              }}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
