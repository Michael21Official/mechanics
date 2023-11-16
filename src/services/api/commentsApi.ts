// commentsApi.ts

import executeQuery from '../db/db';

export const addComment = async (
  userId: number,
  postId: number,
  content: string,
  created_at: Date,
  likes_count: number,
  dislikes_count: number,
  other_comment_details: string
) => {
  const query = `
    INSERT INTO comments (
      user_id,
      post_id,
      content,
      created_at,
      likes_count,
      dislikes_count,
      other_comment_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [userId, postId, content, created_at, likes_count, dislikes_count, other_comment_details];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonego komentarza
  } catch (error) {
    throw error;
  }
};

export const getCommentById = async (commentId: number) => {
  const query = 'SELECT * FROM comments WHERE comment_id = ?';
  const values = [commentId];

  try {
    const comment = await executeQuery(query, values);
    return comment[0];
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (
  commentId: number,
  updatedData: {
    content?: string;
    likes_count?: number;
    dislikes_count?: number;
    other_comment_details?: string;
  }
) => {
  const { content, likes_count, dislikes_count, other_comment_details } = updatedData;

  const query = `
    UPDATE comments
    SET
      content = ?,
      likes_count = ?,
      dislikes_count = ?,
      other_comment_details = ?
    WHERE comment_id = ?
  `;

  const values = [content, likes_count, dislikes_count, other_comment_details, commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId: number) => {
  const query = 'DELETE FROM comments WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAllCommentsByPostId = async (postId: number) => {
  const query = 'SELECT * FROM comments WHERE post_id = ?';
  const values = [postId];

  try {
    const comments = await executeQuery(query, values);
    return comments;
  } catch (error) {
    throw error;
  }
};

export const getCommentLikes = async (commentId: number) => {
    const query = 'SELECT likes_count FROM comments WHERE comment_id = ?';
    const values = [commentId];
  
    try {
      const result = await executeQuery(query, values);
      return result[0]?.likes_count || 0;
    } catch (error) {
      throw error;
    }
  };
  
  export const likeComment = async (commentId: number) => {
    const query = 'UPDATE comments SET likes_count = likes_count + 1 WHERE comment_id = ?';
    const values = [commentId];
  
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error;
    }
  };
  
  export const unlikeComment = async (commentId: number) => {
    const query = 'UPDATE comments SET likes_count = likes_count - 1 WHERE comment_id = ?';
    const values = [commentId];
  
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error;
    }
  };
  
  export const getCommentDislikes = async (commentId: number) => {
    const query = 'SELECT dislikes_count FROM comments WHERE comment_id = ?';
    const values = [commentId];
  
    try {
      const result = await executeQuery(query, values);
      return result[0]?.dislikes_count || 0;
    } catch (error) {
      throw error;
    }
  };
  
  export const dislikeComment = async (commentId: number) => {
    const query = 'UPDATE comments SET dislikes_count = dislikes_count + 1 WHERE comment_id = ?';
    const values = [commentId];
  
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error;
    }
  };
  
  export const undislikeComment = async (commentId: number) => {
    const query = 'UPDATE comments SET dislikes_count = dislikes_count - 1 WHERE comment_id = ?';
    const values = [commentId];
  
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error;
    }
  };
  
  // inne funkcje związane z operacjami na komentarzach...
  