import { useState } from "react";

export default function TestimonialForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ author, message });
        setAuthor("");
        setMessage("");
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Author Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 mt-2"
      />

      <textarea
        placeholder="Testimonial Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mt-2 h-24"
      />

      <button className="btn bg-blue-600 hover:bg-blue-700 rounded-sm mt-2 text-white px-4 py-2">
        Add Testimonial
      </button>
    </form>
  );
}
