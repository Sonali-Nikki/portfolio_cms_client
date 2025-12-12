import { useState } from "react";

export default function ServiceForm({ onSubmit }) {
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
      className="flex flex-col gap-2 mt-3"
    >
      <input
        type="text"
        placeholder="Service Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />

      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded"
      />

      <button className="bg-blue-600 text-white rounded p-2">
        Add Service
      </button>
    </form>
  );
}
