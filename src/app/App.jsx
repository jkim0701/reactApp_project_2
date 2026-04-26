import { useState } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import BlogContent from "./components/BlogContent";
import CreatePost from "./components/CreatePost";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Building Modern Web Apps with React",
      author: "Alex Thompson",
      date: "April 21, 2026",
      readTime: "5 min read",
      content: `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

`,
    },
  ]);

  const handleCreatePost = (title, content, author) => {
    const newPost = {
      id: Date.now(),
      title,
      author,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: `${Math.ceil(content.split(" ").length / 200)} min read`,
      content,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-950">
        <Navbar
          onLoginClick={() => setShowLogin(true)}
          onCreatePostClick={() => setShowCreatePost(true)}
        />
        <BlogContent posts={posts} />
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
        {showCreatePost && (
          <CreatePost
            onClose={() => setShowCreatePost(false)}
            onSubmit={handleCreatePost}
          />
        )}
      </div>
    </AuthProvider>
  );
}
