// messagesImagesApi.ts

import executeQuery from '../db/db.js';

export const addMessageImage = async (messageId: number, imageData: Buffer) => {
  const query = 'INSERT INTO messagesimages (message_id, image_data, created_at) VALUES (?, ?, NOW())';
  const values = [messageId, imageData];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getMessageImageByMessageId = async (messageId: number) => {
  const query = 'SELECT * FROM messagesimages WHERE message_id = ?';
  const values = [messageId];

  try {
    const messageImage = await executeQuery(query, values);
    return messageImage[0];
  } catch (error) {
    throw error;
  }
};

export const updateMessageImage = async (messageId: number, newImageData: Buffer) => {
  const query = 'UPDATE messagesimages SET image_data = ?, created_at = NOW() WHERE message_id = ?';
  const values = [newImageData, messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteMessageImage = async (messageId: number) => {
  const query = 'DELETE FROM messagesimages WHERE message_id = ?';
  const values = [messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na obrazach wiadomości...
