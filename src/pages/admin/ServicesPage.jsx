import { useEffect, useState } from "react";
import { getServices, addService, deleteService } from "../../api/cmsApi.js";
import ServiceForm from "../../components/CMS/ServiceForm.jsx";

export default function ServiceCMS() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    const res = await getServices();
    setServices(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Services</h1>

      <ServiceForm
        onSubmit={async (formData) => {
          await addService(formData);
          loadServices();
        }}
      />

      <ul className="mt-4 space-y-3">
        {services.map((service) => (
          <li key={service._id} className="p-3 border rounded">
            <p><b>Title:</b> {service.title}</p>
            <p><b>Description:</b> {service.description}</p>

            <button
              onClick={async () => {
                await deleteService(service._id);
                loadServices();
              }}
              className="text-orange-100 border-2 rounded px-2 mt-2 bg-red-500 block"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
