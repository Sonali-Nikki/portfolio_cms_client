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
        className="border p-2 mt-2"
      />

      <textarea 
        placeholder="Project description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />

      <button className="btn  bg-blue-600 hover:bg-blue-700 rounded-sm mt-2 p-1 flex-1">Add</button>
    </form>
  );
}
