const BASE = "http://localhost:5000/api/cms";

// ABOUT
export const getAbout = async () => (await fetch(`${BASE}/about`)).json();
export const updateAbout = async (body) =>
  (
    await fetch(`${BASE}/about`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
  ).json();

// SKILLS
export const getSkills = async () => (await fetch(`${BASE}/skills`)).json();
export const addSkill = async (body) =>
  await fetch(`${BASE}/skills`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

export const deleteSkill = async (id) =>
  await fetch(`${BASE}/skills/${id}`, { method: "DELETE" });

// PROJECTS
export const getProjects = async () => (await fetch(`${BASE}/projects`)).json();
export const addProject = async (body) =>
  await fetch(`${BASE}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    body: JSON.stringify(body),
  });

export const deleteProject = async (id) =>
  await fetch(`${BASE}/projects/${id}`, {
    method: "DELETE",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
