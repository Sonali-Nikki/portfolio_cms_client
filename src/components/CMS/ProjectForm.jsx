import { useState } from "react";

export default function ProjectForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, description });
        setTitle("");
        setDescription("");
      }}
      className="flex flex-col gap-2"
    >
      <input 
        type="text"
        placeholder="Project title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2"
      />

      <textarea 
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2"
      />

      <button className="btn">Add</button>
    </form>
  );
}
