import { useState } from "react";

export default function AboutForm({ defaultData, onSubmit }) {
  const [description, setDescription] = useState(defaultData?.description || "");

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({ description });
  };

  return (
    <form onSubmit={submitHandler}>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
      />

      <button className="btn mt-2">Save</button>
    </form>
  );
}
