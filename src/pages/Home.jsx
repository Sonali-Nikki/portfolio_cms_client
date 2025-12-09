export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-700 text-white">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Hello, I'm Sonali 👋</h1>
        <p className="text-xl opacity-90">Full Stack Developer | MERN | Portfolio CMS Builder</p>

        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
