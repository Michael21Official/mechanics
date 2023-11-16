// postsApi.ts

import executeQuery from '../db/db.js';

export const addPost = async (
  userId: number,
  content: string,
  created_at: Date,
  status: string,
  visitors_count: number,
  views_count: number,
  category: string,
  title: string,
  other_post_details: string
) => {
  const query = `
    INSERT INTO posts (
      user_id,
      content,
      created_at,
      status,
      visitors_count,
      views_count,
      category,
      title,
      other_post_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [userId, content, created_at, status, visitors_count, views_count, category, title, other_post_details];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonego posta
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (postId: number) => {
  const query = 'SELECT * FROM posts WHERE post_id = ?';
  const values = [postId];

  try {
    const post = await executeQuery(query, values);
    return post[0];
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  postId: number,
  updatedData: {
    content?: string;
    status?: string;
    visitors_count?: number;
    views_count?: number;
    category?: string;
    title?: string;
    other_post_details?: string;
  }
) => {
  const { content, status, visitors_count, views_count, category, title, other_post_details } = updatedData;

  const query = `
    UPDATE posts
    SET
      content = ?,
      status = ?,
      visitors_count = ?,
      views_count = ?,
      category = ?,
      title = ?,
      other_post_details = ?
    WHERE post_id = ?
  `;

  const values = [content, status, visitors_count, views_count, category, title, other_post_details, postId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (postId: number) => {
  const query = 'DELETE FROM posts WHERE post_id = ?';
  const values = [postId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAllPostsByUserId = async (userId: number) => {
  const query = 'SELECT * FROM posts WHERE user_id = ?';
  const values = [userId];

  try {
    const posts = await executeQuery(query, values);
    return posts;
  } catch (error) {
    throw error;
  }
};

// Inne funkcje związane z operacjami na postach...
