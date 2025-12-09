import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 w-full p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
