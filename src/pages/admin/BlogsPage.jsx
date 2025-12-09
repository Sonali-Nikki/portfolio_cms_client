import CRUDPage from "../../components/CRUDPage.jsx";
import api from "../../api/api.js"


export default function BlogsPage() {
  return (
    <CRUDPage
      title="Blogs"
      api={api}
      fields={[
        { name: "title", label: "Title" },
        { name: "content", label: "Content", type: "textarea" },
      ]}
    />
  );
}