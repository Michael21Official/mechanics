// PostComments.tsx
import React from 'react';
import { CommentType } from '../../../../../types/types';

interface PostCommentsProps {
  comments: CommentType[];
}

const PostComments: React.FC<PostCommentsProps> = ({ comments }) => {
  return (
    <div className="post-comments">
      {/* Wyświetl wszystkie dostępne dane komentarzy */}
      {comments.map((comment: CommentType) => (
        <div key={comment.commentId} className="comment">
          <p>{comment.content}</p>
          <p>Created at: {comment.created_at.toLocaleString()}</p>
          <p>Likes: {comment.likes_count}</p>
          <p>Dislikes: {comment.dislikes_count}</p>
          {/* Dodaj inne dostępne dane komentarzy */}
        </div>
      ))}
    </div>
  );
};

export default PostComments;
