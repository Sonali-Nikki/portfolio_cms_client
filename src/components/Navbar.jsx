import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <div className="space-x-6 hidden md:flex">
          <Link to="home" smooth className="cursor-pointer hover:text-blue-600">
            Home
          </Link>
          <Link to="about" smooth className="cursor-pointer hover:text-blue-600">
            About
          </Link>
          <Link to="projects" smooth className="cursor-pointer hover:text-blue-600">
            Projects
          </Link>
          <Link to="skills" smooth className="cursor-pointer hover:text-blue-600">
            Skills
          </Link>
          <Link to="contact" smooth className="cursor-pointer hover:text-blue-600">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
