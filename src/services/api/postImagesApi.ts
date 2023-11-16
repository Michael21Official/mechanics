// postImagesApi.ts

import executeQuery from '../db/db.js';

export const addPostImage = async (postId: number, image_data: Buffer, created_at: Date) => {
  const query = `
    INSERT INTO postimages (post_id, image_data, created_at)
    VALUES (?, ?, ?)
  `;

  const values = [postId, image_data, created_at];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo dodanego obrazu posta
  } catch (error) {
    throw error;
  }
};

export const getPostImageById = async (imageId: number) => {
  const query = 'SELECT * FROM postimages WHERE post_image_id = ?';
  const values = [imageId];

  try {
    const postImage = await executeQuery(query, values);
    return postImage[0];
  } catch (error) {
    throw error;
  }
};

export const getPostImagesByPostId = async (postId: number) => {
  const query = 'SELECT * FROM postimages WHERE post_id = ?';
  const values = [postId];

  try {
    const postImages = await executeQuery(query, values);
    return postImages;
  } catch (error) {
    throw error;
  }
};

export const updatePostImage = async (imageId: number, updatedData: { image_data?: Buffer }) => {
  const { image_data } = updatedData;

  const query = `
    UPDATE postimages
    SET image_data = ?
    WHERE post_image_id = ?
  `;

  const values = [image_data, imageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deletePostImage = async (imageId: number) => {
  const query = 'DELETE FROM postimages WHERE post_image_id = ?';
  const values = [imageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Inne funkcje związane z operacjami na obrazach postów...
