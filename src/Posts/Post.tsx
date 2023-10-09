import React from 'react';
import { PostType } from '../types'; // Importuj typ PostType z pliku types.ts

// Określenie typów dla właściwości komponentu
interface PostProps {
  post: PostType; // Zmieniamy typ właściwości na PostType
}

function Post({ post }: PostProps) {
  return (
    <div className="post">
      <div className="post-author">{post.author}</div>
      <div className="post-content">{post.content}</div>
      <div className="post-date">{post.date}</div>
    </div>
  );
}

export default Post;
