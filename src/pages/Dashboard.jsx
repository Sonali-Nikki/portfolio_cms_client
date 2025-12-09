const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-700 min-h-screen text-black">
      <h1 className="text-3xl text-green-100 font-semibold">Welcome Admin 👋</h1>

      <div className="grid grid-cols-3 gap-4 mt-6 text-teal-950 text-opacity-100 text-base">
        <div className="p-4 shadow bg-slate-200 rounded">Manage About</div>
        <div className="p-4 shadow bg-slate-200 rounded">Manage Skills</div>
        <div className="p-4 shadow bg-slate-200 rounded">Manage Projects</div>
        <div className="p-4 shadow bg-slate-200 rounded">Manage Blogs</div>
        <div className="p-4 shadow bg-slate-200 rounded">Manage Experience</div>
        <div className="p-4 shadow bg-slate-200 rounded">Manage Services</div>
      </div>
    </div>
  );
};

export default Dashboard;