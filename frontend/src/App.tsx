import React, { useState, useEffect } from "react";

interface Post {
  _id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = async () => {
    console.log(apiUrl);
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}`);
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!title || !content) {
      setError("Title and content are required");
      return;
    }
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });
      if (!res.ok) throw new Error("Failed to add post");
      setTitle("");
      setContent("");
      setShowForm(false);
      fetchPosts();
    } catch (err) {
      setError("Failed to add post");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 font-sans">
      <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
      <div className="flex justify-center mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setShowForm((f) => !f)}
        >
          {showForm ? "Hide Form" : "Add Poste"}
        </button>
      </div>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded p-6 mb-6 shadow-sm"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
          {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
        </form>
      )}
      <div className="space-y-4">
        {loading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-400">No posts yet.</div>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border border-gray-100 rounded p-4 shadow-sm"
            >
              <div className="font-semibold text-lg mb-1">{post.title}</div>
              <div className="text-gray-700 whitespace-pre-line">
                {post.content}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
