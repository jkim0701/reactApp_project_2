import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { MessageSquare, Send } from 'lucide-react';

export default function CommentSection() {
  const { isLoggedIn, user } = useAuth();
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      username: 'sarah_dev',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus!',
      timestamp: new Date('2026-04-20T10:30:00')
    },
    {
      id: 2,
      username: 'john_code',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam?',
      timestamp: new Date('2026-04-20T14:15:00')
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() && user) {
      const newComment = {
        id: Date.now(),
        username: user.username,
        text: commentText,
        timestamp: new Date()
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="mt-12 border-t border-gray-700 pt-8">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-6 h-6 text-indigo-400" />
        <h3 className="text-2xl text-white">Comments ({comments.length})</h3>
      </div>

      {!isLoggedIn ? (
        <div className="bg-amber-900 bg-opacity-30 border border-amber-700 rounded-lg p-6 mb-8 text-center">
          <p className="text-amber-200">
            Please log in to leave a comment and join the discussion.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col gap-3">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder={`Share your thoughts, ${user?.username}...`}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-500 resize-none"
              rows={4}
              required
            />
            <button
              type="submit"
              className="self-end flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-4 h-4" />
              Post Comment
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-800 rounded-lg p-5 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-indigo-400">@{comment.username}</span>
              <span className="text-sm text-gray-500">{formatDate(comment.timestamp)}</span>
            </div>
            <p className="text-gray-300">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
