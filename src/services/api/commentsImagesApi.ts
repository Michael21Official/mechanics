// commentsImagesApi.ts

import executeQuery from '../db/db';

export const addCommentImage = async (commentId: number, imageData: Buffer) => {
  const query = 'INSERT INTO commentsimages (comment_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [commentId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getCommentImageByCommentId = async (commentId: number) => {
  const query = 'SELECT * FROM commentsimages WHERE comment_id = ?';
  const values = [commentId];

  try {
    const commentImage = await executeQuery(query, values);
    return commentImage[0];
  } catch (error) {
    throw error;
  }
};

export const updateCommentImage = async (commentId: number, newImageData: Buffer) => {
  const query = 'UPDATE commentsimages SET image_data = ?, created_at = NOW() WHERE comment_id = ?';
  const values = [newImageData, commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteCommentImage = async (commentId: number) => {
  const query = 'DELETE FROM commentsimages WHERE comment_id = ?';
  const values = [commentId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na obrazach komentarzy...
