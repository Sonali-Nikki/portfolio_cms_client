import { useEffect, useState } from "react";
import { getBlogs, addBlog, deleteBlog } from "../../api/cmsApi.js";
import BlogForm from "../../components/CMS/BlogForm.jsx";

export default function BlogsCMS() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manage Blogs</h1>

      <BlogForm
        onSubmit={async (formData) => {
          await addBlog(formData);
          loadBlogs();
        }}
      />

      <ul className="mt-4 space-y-3 bg-orange-200 rounded">
        {blogs.map((blog) => (
          <li key={blog._id} className="p-3 border rounded">
            <h2 className="font-bold">{blog.title}</h2>
            <p>{blog.content}</p>

            <button
              onClick={async () => {
                await deleteBlog(blog._id);
                loadBlogs();
              }}
              className="text-orange-100 border-2 rounded px-2 mt-2 bg-red-500 block"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
