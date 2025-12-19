const BASE = "http://localhost:5000/api/cms";

// Helper: return request with optional token
const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

// ABOUT

export const getAbout = async () => (await fetch(`${BASE}/about`)).json();

export const updateAbout = async (body) =>
  (
    await fetch(`${BASE}/about`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify(body),
    })
  ).json();

// SKILLS

export const getSkills = async () => (await fetch(`${BASE}/skills`)).json();

export const addSkill = async (body) =>
  await fetch(`${BASE}/skills`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

export const deleteSkill = async (id) =>
  await fetch(`${BASE}/skills/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

// PROJECTS

export const getProjects = async () => (await fetch(`${BASE}/projects`)).json();

export const addProject = async (body) =>
  await fetch(`${BASE}/projects`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

export const deleteProject = async (id) =>
  await fetch(`${BASE}/projects/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

// BLOGS

export const getBlogs = async () => (await fetch(`${BASE}/blogs`)).json();

export const addBlog = async (body) =>
  await fetch(`${BASE}/blogs`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

export const deleteBlog = async (id) =>
  await fetch(`${BASE}/blogs/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

// TESTIMONIALS

export const getTestimonials = async () =>
  (await fetch(`${BASE}/testimonials`)).json();

export const addTestimonial = async (body) =>
  await fetch(`${BASE}/testimonials`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

export const deleteTestimonial = async (id) =>
  await fetch(`${BASE}/testimonials/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

// EXPERIENCE TIMELINE

export const getExperience = async () =>
  (await fetch(`${BASE}/experience`)).json();

export const addExperience = async (body) =>
  await fetch(`${BASE}/experience`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

export const deleteExperience = async (id) =>
  await fetch(`${BASE}/experience/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

// SERVICES
export const getServices = async () => (await fetch(`${BASE}/services`)).json();

export const addService = async (body) =>
  await fetch(`${BASE}/services`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

export const deleteService = async (id) =>
  await fetch(`${BASE}/services/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  
// CONTACT FORM SUBMISSION

export const submitContactForm = async (body) =>  
  await fetch(`${BASE}/contact`, {
    method: "POST",
    headers: {  
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }); 
  