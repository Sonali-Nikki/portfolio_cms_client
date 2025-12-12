import { useEffect, useState } from "react";
import { getTestimonials, addTestimonial, deleteTestimonial } from "../../api/cmsApi.js";
import TestimonialForm from "../../components/CMS/TestimonialForm.jsx";


export default function TestimonialsCMS() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const res = await getTestimonials();
    setTestimonials(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Testimonials</h1>

      <TestimonialForm
        onSubmit={async (formData) => {
          await addTestimonial(formData);
          loadTestimonials();
        }}
      />

      <ul className="mt-4 space-y-3">
        {testimonials.map((t) => (
          <li key={t._id} className="p-3 border rounded">
            <p><b>Name:</b> {t.name}</p>
            <p><b>Message:</b> {t.message}</p>

            <button
              onClick={async () => {
                await deleteTestimonial(t._id);
                loadTestimonials();
              }}
              className="text-red-500 mt-2 block"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
