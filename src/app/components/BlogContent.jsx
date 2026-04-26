import { Calendar, Clock, User } from 'lucide-react';
import CommentSection from './CommentSection';

export default function BlogContent({ posts = [] }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-700">
            <div className="p-8">
              <h1 className="text-4xl text-white mb-6">
                {post.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="prose max-w-none space-y-6 text-gray-300">
                {post.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              <CommentSection />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
