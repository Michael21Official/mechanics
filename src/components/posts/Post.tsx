import React from 'react';
import { PostType } from '../../types/types';
import './PostProfile.css'; // Importuj plik ze stylami CSS

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <div className="post-profile">
      <div className="post-profile-username">{post.author}</div>
      <div className="post-profile-content">{post.content}</div>
      <div className="post-profile-date">{post.date}</div>
    </div>
  );
}

export default Post;
