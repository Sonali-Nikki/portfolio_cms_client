const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Welcome Admin 👋</h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-4 shadow bg-white rounded">Manage About</div>
        <div className="p-4 shadow bg-white rounded">Manage Skills</div>
        <div className="p-4 shadow bg-white rounded">Manage Projects</div>
        <div className="p-4 shadow bg-white rounded">Manage Blogs</div>
        <div className="p-4 shadow bg-white rounded">Manage Experience</div>
        <div className="p-4 shadow bg-white rounded">Manage Services</div>
      </div>
    </div>
  );
};

export default Dashboard;