// Posts.tsx
import React, { useState } from 'react';
import PostView from './components/postView/PostView';
import { PostType } from '../../types/types';
import Post from './Post';
import './Posts.css';

interface PostsProps {
  posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);

  const handlePostClick = (post: PostType) => {
    setSelectedPost(post);
  };

  const handleClosePostView = () => {
    setSelectedPost(null);
  };

  return (
    <div className="post-view">
      {posts.map((post) => (
        <div key={post.id} onClick={() => handlePostClick(post)}>
          {/* Dodaj obsługę kliknięcia na post */}
          <Post key={post.id} post={post} />
        </div>
      ))}

      {selectedPost && (
        <div className="post-view-overlay">
          {/* Wyświetl moduł PostView po kliknięciu na post */}
          <PostView post={selectedPost} onClose={handleClosePostView} />
        </div>
      )}
    </div>
  );
};

export default Posts;
