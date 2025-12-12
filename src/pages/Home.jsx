
export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-700 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">Hello, I'm Sonali 👋</h1>
        <p className="text-xl opacity-90">Full Stack Developer | MERN | Portfolio CMS Builder</p>

        <a
          href="#projects"
          className="mt-6 inline-block bg-slate-100  text-blue-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
