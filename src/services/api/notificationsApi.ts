// notificationsApi.ts

import executeQuery from '../db/db.js';

export const addNotification = async (
  userId: number,
  type: string,
  relatedId: number,
  likedPostId: number | null,
  dislikedPostId: number | null,
  likedCommentId: number | null,
  dislikedCommentId: number | null,
  isRead: boolean
) => {
  const query = `
    INSERT INTO notifications (
      user_id,
      type,
      related_id,
      liked_post_id,
      disliked_post_id,
      liked_comment_id,
      disliked_comment_id,
      is_read,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
  `;

  const values = [userId, type, relatedId, likedPostId, dislikedPostId, likedCommentId, dislikedCommentId, isRead];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getNotificationById = async (notificationId: number) => {
  const query = 'SELECT * FROM notifications WHERE notification_id = ?';
  const values = [notificationId];

  try {
    const notification = await executeQuery(query, values);
    return notification[0];
  } catch (error) {
    throw error;
  }
};

export const markNotificationAsRead = async (notificationId: number) => {
  const query = 'UPDATE notifications SET is_read = true WHERE notification_id = ?';
  const values = [notificationId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAllNotificationsByUserId = async (userId: number) => {
  const query = 'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC';
  const values = [userId];

  try {
    const notifications = await executeQuery(query, values);
    return notifications;
  } catch (error) {
    throw error;
  }
};

// Dodatkowe funkcje związane z operacjami na powiadomieniach...
