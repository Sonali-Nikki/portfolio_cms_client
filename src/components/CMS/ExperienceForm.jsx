import { useState } from "react";

export default function ExperienceForm({ onSubmit }) {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ role, company, year, description });
        setRole("");
        setCompany("");
        setYear("");
        setDescription("");
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Role / Position"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 mt-2"
      />

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border p-2 mt-2"
      />

      <input
        type="text"
        placeholder="Year (e.g., 2022–2023)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border p-2 mt-2"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mt-2 h-24"
      />

      <button className="btn bg-blue-600 hover:bg-blue-700 rounded-sm mt-2 text-white px-4 py-2">
        Add Experience
      </button>
    </form>
  );
}
