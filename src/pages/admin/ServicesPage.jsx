import CRUDPage from "../../components/CRUDPage.jsx";
import api from "../../api/api.js"

export default function ServicesPage() {
  return (
    <CRUDPage
      title="Services"
      api={api}
      fields={[
        { name: "name", label: "Service Name" },
        { name: "description", label: "Description", type: "textarea" },
      ]}
    />
  );
}
