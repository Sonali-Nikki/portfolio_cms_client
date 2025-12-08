import { useState } from "react";

export default function SkillsForm({ onSubmit }) {
  const [name, setName] = useState("");

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name });
        setName("");
      }}
      className="flex gap-2"
    >
      <input 
        type="text"
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <button className="btn">Add</button>
    </form>
  );
}
