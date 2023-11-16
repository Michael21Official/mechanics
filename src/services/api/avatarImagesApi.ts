import executeQuery from '../db/db.js';

export const addAvatarImage = async (userId: number, imageData: Buffer) => {
  const query = 'INSERT INTO avatarimages (user_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [userId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAvatarImageByUserId = async (userId: number) => {
  const query = 'SELECT * FROM avatarimages WHERE user_id = ?';
  const values = [userId];

  try {
    const avatarImage = await executeQuery(query, values);
    return avatarImage[0];
  } catch (error) {
    throw error;
  }
};

export const updateAvatarImage = async (userId: number, newImageData: Buffer) => {
  const query = 'UPDATE avatarimages SET image_data = ?, created_at = NOW() WHERE user_id = ?';
  const values = [newImageData, userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteAvatarImage = async (userId: number) => {
  const query = 'DELETE FROM avatarimages WHERE user_id = ?';
  const values = [userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};
