import { Outlet, Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-700 min-h-screen text-black">
      <h1 className="text-3xl text-green-100 font-semibold">
        Welcome Admin 👋
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-6 text-teal-950 text-opacity-100 text-base">
        <Link
          to="about"
          className={`p-4 shadow rounded ${
            location.pathname === "/dashboard/about"
              ? "bg-green-200"
              : "bg-slate-200"
          }`}
        >
          Manage About
        </Link>

        <Link
          to="skills"
          className={`p-4 shadow rounded ${
            location.pathname === "/dashboard/skills"
              ? "bg-green-200"
              : "bg-slate-200"
          }`}
        >
          Manage Skills
        </Link>
        <Link
          to="projects"
          className={`p-4 shadow rounded ${
            location.pathname === "/dashboard/projects"
              ? "bg-green-200"
              : "bg-slate-200"
          }`}
        >
          Manage Projects
        </Link>
        <Link to="blogs" className="p-4 shadow bg-slate-200 rounded">
          Manage Blogs
        </Link>
        <Link to="experience" className="p-4 shadow bg-slate-200 rounded">
          Manage Experience
        </Link>
        <Link to="services" className="p-4 shadow bg-slate-200 rounded">
          Manage Services
        </Link>
      </div>

      {/* Nested route will render here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
