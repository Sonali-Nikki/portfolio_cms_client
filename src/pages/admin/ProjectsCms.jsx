import { useEffect, useState } from "react";
import { getProjects, addProject, deleteProject } from "../../api/cmsApi";
import ProjectForm from "../../components/CMS/ProjectForm";

export default function ProjectsCMS() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await getProjects();
    setProjects(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Projects</h1>

      <ProjectForm 
        onSubmit={async (data) => {
          await addProject(data);
          load();
        }}
      />

      <div className="mt-4">
        {projects.map((p) => (
          <div key={p._id} className="border p-2 mt-2">
            <h2>{p.title}</h2>
            <p>{p.description}</p>

            <button 
              onClick={async () => { await deleteProject(p._id); load(); }}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
