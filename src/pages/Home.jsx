// import { useEffect, useState } from "react";
// import {
//   getAbout,
//   getProjects,
//   getSkills,
//   getBlogs,
//   getTestimonials,
//   getServices,
//   getExperience,
// } from "../api/cmsApi.js";

import { Link } from "react-router-dom";

export default function Home() {
  // const [about, setAbout] = useState(null);
  // const [skills, setSkills] = useState([]);
  // const [projects, setProjects] = useState([]);
  // const [services, setServices] = useState([]);
  // const [blogs, setBlogs] = useState([]);
  // const [testimonials, setTestimonials] = useState([]);
  // const [experience, setExperience] = useState([]);

  // useEffect(() => {
  //   loadHomeData();
  // }, []);

  // const loadHomeData = async () => {
  //   setAbout(await getAbout());
  //   setSkills(await getSkills());
  //   setProjects(await getProjects());
  //   setServices(await getServices());
  //   setBlogs(await getBlogs());
  //   setTestimonials(await getTestimonials());
  //   setExperience(await getExperience());
  // };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-700 text-white"
    >
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
          Hello, I'm Sonali 👋
        </h1>
        <p className="text-xl opacity-90">
          Full Stack Developer | MERN | Portfolio CMS Builder
        </p>

          <Link
            to="projects"
            smooth="true"
            className="mt-6 inline-block bg-slate-100  text-blue-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
          >
            View My Work
          </Link>

      </div>
    </section>
  );
}
