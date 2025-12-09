import CRUDPage from "../../components/CRUDPage.jsx";
import api from "../../api/api.js"

export default function ExperiencePage() {
  return (
    <CRUDPage
      title="Experience"
      api={api}
      fields={[
        { name: "title", label: "Title" },
        { name: "company", label: "Company" },
        { name: "duration", label: "Duration" },
        { name: "description", label: "Description", type: "textarea" },
      ]}
    />
  );
}
