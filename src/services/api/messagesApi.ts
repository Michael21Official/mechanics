// messagesApi.ts

import executeQuery from '../db/db.js';

export const addMessage = async (userId: number, content: string, created_at: Date) => {
  const query = 'INSERT INTO messages (user_id, content, created_at) VALUES (?, ?, ?)';
  const values = [userId, content, created_at];

  try {
    const result = await executeQuery(query, values);
    return result.insertId; // ID nowo utworzonej wiadomości
  } catch (error) {
    throw error;
  }
};

export const getMessageById = async (messageId: number) => {
  const query = 'SELECT * FROM messages WHERE message_id = ?';
  const values = [messageId];

  try {
    const message = await executeQuery(query, values);
    return message[0];
  } catch (error) {
    throw error;
  }
};

export const updateMessage = async (
  messageId: number,
  updatedData: {
    content?: string;
  }
) => {
  const { content } = updatedData;

  const query = 'UPDATE messages SET content = ? WHERE message_id = ?';
  const values = [content, messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteMessage = async (messageId: number) => {
  const query = 'DELETE FROM messages WHERE message_id = ?';
  const values = [messageId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAllMessagesByUserId = async (userId: number) => {
  const query = 'SELECT * FROM messages WHERE user_id = ?';
  const values = [userId];

  try {
    const messages = await executeQuery(query, values);
    return messages;
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na wiadomościach...
