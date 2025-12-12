import { Outlet, Link, useLocation } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-700 min-h-screen font-medium text-black ">
      <h1 className="text-4xl text-rose-800 font-semibold fixed w-full bg-slate-200 shadow-lg top-0 left-0 p-1  flex items-center">
        <button
          className="text-yellow-800 font-bold p-3 text-3xl mr-4"
          onClick={() => {
            window.location.href = "/sidebar";
          }}
        >
          <CiMenuBurger />
        </button>
        <button
          onClick={() => {
            window.location.href = "/home";
          }}
        >
          Welcome Admin
        </button>
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-16 text-teal-950 text-opacity-100 text-base">
        <Link
          to="about"
          className={`p-4 shadow rounded ${
            location.pathname === "/dashboard/about"
              ? "bg-blue-200"
              : "bg-slate-200"
          }`}
        >
          Manage About
        </Link>

        <Link
          to="skills"
          className={`p-4 shadow rounded ${
            location.pathname === "/dashboard/skills"
              ? "bg-blue-200"
              : "bg-slate-200"
          }`}
        >
          Manage Skills
        </Link>
        <Link
          to="projects"
          className={`p-4 shadow rounded ${
            location.pathname === "/dashboard/projects"
              ? "bg-blue-200"
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
        <Link to="services" className="p-4 shadow bg-slate-200 rounded">
          Manage Testimonial
        </Link>
      </div>

      {/* Nested route will render here */}
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
