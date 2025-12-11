import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "About", path: "/dashboard/about" },
    { name: "Skills", path: "/dashboard/skills" },
    { name: "Projects", path: "/dashboard/projects" },
    { name: "Blogs", path: "/dashboard/blogs" },
    { name: "Testimonials", path: "/dashboard/testimonials" },
    { name: "Experience", path: "/dashboard/experience" },
    { name: "Services", path: "/dashboard/services" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen fixed top-0 left-0 flex flex-col shadow-lg">
      
      <button className="p-6 text-xl font-bold border-b border-gray-700"
          onClick={() => {
            window.location.href = "/dashboard";
          }}
        >
        Portfolio CMS
      </button>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block p-3 rounded-md font-medium transition 
              ${
                pathname === item.path
                  ? "bg-blue-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }
            `}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Footer / Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          className="w-full bg-red-600 hover:bg-red-700 transition text-white p-2 rounded-md"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
