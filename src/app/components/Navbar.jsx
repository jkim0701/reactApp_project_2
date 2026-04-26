import { useAuth } from '../contexts/AuthContext';
import { LogIn, LogOut, BookOpen, PenSquare } from 'lucide-react';

export default function Navbar({ onLoginClick, onCreatePostClick }) {
  const { isLoggedIn, logout, user } = useAuth();

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-indigo-400" />
          <h1 className="text-2xl text-white">DevBlog</h1>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span className="text-gray-300">Welcome, {user?.username}</span>
              <button
                onClick={onCreatePostClick}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <PenSquare className="w-4 h-4" />
                Create Post
              </button>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
