import { useState } from "react";

export default function BlogForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle("");
        setContent("");
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mt-2"
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 mt-2 h-28"
      />

      <button className="btn bg-blue-600 hover:bg-blue-700 rounded-sm mt-2 text-white px-4 py-2">
        Add Blog
      </button>
    </form>
  );
}
