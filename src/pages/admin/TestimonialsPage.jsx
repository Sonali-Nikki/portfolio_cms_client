import CRUDPage from "../../components/CRUDPage.jsx";
import api from "../../api/api.js"

export default function TestimonialsPage() {
  return (
    <CRUDPage
      title="Testimonials"
      api={api}
      fields={[
        { name: "name", label: "Name" },
        { name: "role", label: "Role" },
        { name: "message", label: "Message", type: "textarea" },
      ]}
    />
  );
}
