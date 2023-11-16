// globalMessagesApi.ts

import executeQuery from '../db/db';

export const addGlobalMessage = async (content: string, created_at: Date) => {
  const query = 'INSERT INTO globalmessages (content, created_at) VALUES (?, ?)';
  const values = [content, created_at];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonej globalnej wiadomości
  } catch (error) {
    throw error;
  }
};

export const getGlobalMessageById = async (globalMessageId: number) => {
  const query = 'SELECT * FROM globalmessages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    const globalMessage = await executeQuery(query, values);
    return globalMessage[0];
  } catch (error) {
    throw error;
  }
};

export const updateGlobalMessage = async (
  globalMessageId: number,
  updatedData: {
    content?: string;
    created_at?: Date;
  }
) => {
  const { content, created_at } = updatedData;

  const query = `
    UPDATE globalmessages
    SET
      content = ?,
      created_at = ?
    WHERE global_message_id = ?
  `;

  const values = [content, created_at, globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteGlobalMessage = async (globalMessageId: number) => {
  const query = 'DELETE FROM globalmessages WHERE global_message_id = ?';
  const values = [globalMessageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAllGlobalMessages = async () => {
  const query = 'SELECT * FROM globalmessages';

  try {
    const globalMessages = await executeQuery(query);
    return globalMessages;
  } catch (error) {
    throw error;
  }
};

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

// Dodatkowe funkcje związane z operacjami na globalnych wiadomościach...
