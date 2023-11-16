// globalMessagesImagesApi.ts

import executeQuery from '../db/db';

export const addGlobalMessageImage = async (globalMessageId: number, imageData: Buffer) => {
  const query = 'INSERT INTO globalmessagesimages (global_message_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [globalMessageId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getGlobalMessageImageByGlobalMessageId = async (globalMessageId: number) => {
  const query = 'SELECT * FROM globalmessagesimages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    const globalMessageImage = await executeQuery(query, values);
    return globalMessageImage[0];
  } catch (error) {
    throw error;
  }
};

export const updateGlobalMessageImage = async (globalMessageId: number, newImageData: Buffer) => {
  const query = 'UPDATE globalmessagesimages SET image_data = ?, created_at = NOW() WHERE global_message_id = ?';
  const values = [newImageData, globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteGlobalMessageImage = async (globalMessageId: number) => {
  const query = 'DELETE FROM globalmessagesimages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na obrazach globalnych wiadomości...
