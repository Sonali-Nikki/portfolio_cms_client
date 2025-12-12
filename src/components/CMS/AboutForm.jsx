import { useState } from "react";

export default function AboutForm({ defaultData, onSubmit }) {
  const [description, setDescription] = useState(defaultData?.description || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!description.trim()) return alert("Description cannot be empty");
    onSubmit({ description });
  };

  return (
    <form 
      onSubmit={submitHandler} 
      className="space-y-3 bg-white p-4 rounded shadow"
    >
      <label className="block font-semibold">About Description</label>

      <textarea
        placeholder="Write about yourself..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-3 w-full rounded min-h-[120px] resize-y focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        disabled={!description.trim()}
      >
        Save
      </button>
    </form>
  );
}
