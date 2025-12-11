// import { useState } from "react";
// import api from "../api/api.js";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState("");

//   const handleChange = e => {
//     setForm({...form, [e.target.name]: e.target.value});
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setLoading(true);
//     setDone("");

//     try {
//       await api.post("/contact", form);
//       setDone("Message sent successfully!");
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       setDone("Failed to send message");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="name" value={form.name} onChange={handleChange}
//           placeholder="Your Name" className="border p-2 w-full" required />

//         <input name="email" value={form.email} onChange={handleChange}
//           placeholder="Your Email" className="border p-2 w-full" required />

//         <textarea name="message" value={form.message} onChange={handleChange}
//           placeholder="Message" rows="5" className="border p-2 w-full" required />

//         <button disabled={loading}
//           className="bg-blue-600 text-white px-4 py-2 rounded">
//           {loading ? "Sending..." : "Send"}
//         </button>

//         {done && <p className="text-center mt-4">{done}</p>}
//       </form>
//     </div>
//   );
// }
