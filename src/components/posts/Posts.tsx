import React from 'react';
import { PostType } from '../../types/types';
import './Post.css';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-profile">
      <div className="post-profile-username">{post.author}</div>
      <div className="post-profile-content">{post.content}</div>
      <div className="post-profile-date">{post.date}</div>
    </div>
  );
};

export default Post;
