import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-200 shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl text-bold text-amber-700 font-bold ">
          My Portfolio
        </h1>

        <div className="space-x-6  md:flex font-bold drop-shadow-[0_0_12px_rgba(192,132,252,0.9)]">
          <Link
            to="home"
            smooth="true"
            className="cursor-pointer font-bold  hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth="true"
            className="cursor-pointer font-bold hover:text-blue-600"
          >
            About
          </Link>
          <Link
            to="/projects"
            smooth="true"
            className="cursor-pointer font-bold hover:text-blue-600"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth="true"
            className="cursor-pointer font-bold hover:text-blue-600"
          >
            Skills
          </Link>
          <Link
            to="/admin/contact"
            smooth="true"
            className="cursor-pointer font-bold hover:text-blue-600"
          >
            Contact
          </Link>
        </div>


      </div>
    </nav>
  );
}
