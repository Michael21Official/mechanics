// userApi.ts

import executeQuery from '../db/db';

export const createUser = async (
  username: string,
  email: string,
  password: string,
  account_created_at: Date,
  scientific_interests: string,
  birth_year: number,
  university_name: string,
  faculty: string,
  field_of_study: string,
  degree_level: string,
  user_title: string,
  other_user_details: string
) => {
  const query = `
    INSERT INTO users (
      username,
      email,
      password,
      account_created_at,
      scientific_interests,
      birth_year,
      university_name,
      faculty,
      field_of_study,
      degree_level,
      user_title,
      other_user_details
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    username,
    email,
    password,
    account_created_at,
    scientific_interests,
    birth_year,
    university_name,
    faculty,
    field_of_study,
    degree_level,
    user_title,
    other_user_details,
  ];

  try {
    const result = await executeQuery(query, values);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId: number) => {
  const query = 'SELECT * FROM users WHERE user_id = ?';
  const values = [userId];

  try {
    const user = await executeQuery(query, values);
    return user[0];
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (
  userId: number,
  updatedData: {
    username?: string;
    email?: string;
    password?: string;
    scientific_interests?: string;
    birth_year?: number;
    university_name?: string;
    faculty?: string;
    field_of_study?: string;
    degree_level?: string;
    user_title?: string;
    other_user_details?: string;
  }
) => {
  const { username, email, password, scientific_interests, birth_year, university_name, faculty, field_of_study, degree_level, user_title, other_user_details } = updatedData;

  const query = `
    UPDATE users
    SET
      username = ?,
      email = ?,
      password = ?,
      scientific_interests = ?,
      birth_year = ?,
      university_name = ?,
      faculty = ?,
      field_of_study = ?,
      degree_level = ?,
      user_title = ?,
      other_user_details = ?
    WHERE user_id = ?
  `;

  const values = [
    username,
    email,
    password,
    scientific_interests,
    birth_year,
    university_name,
    faculty,
    field_of_study,
    degree_level,
    user_title,
    other_user_details,
    userId,
  ];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId: number) => {
  const query = 'DELETE FROM users WHERE user_id = ?';
  const values = [userId];

  try {
    await executeQuery(query, values);
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  const query = 'SELECT * FROM users';

  try {
    const users = await executeQuery(query);
    return users;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (userId: number, newPassword: string) => {
    const query = 'UPDATE users SET password = ? WHERE user_id = ?';
    const values = [newPassword, userId];
  
    try {
      await executeQuery(query, values);
    } catch (error) {
      throw error;
    }
  };
  
  export const getUserStats = async (userId: number) => {
    const query = 'SELECT * FROM user_stats WHERE user_id = ?';
    const values = [userId];
  
    try {
      const userStats = await executeQuery(query, values);
      return userStats[0];
    } catch (error) {
      throw error;
    }
  };
  export const getUserPosts = async (userId: number) => {
    const query = 'SELECT * FROM posts WHERE user_id = ?';
    const values = [userId];
  
    try {
      const userPosts = await executeQuery(query, values);
      return userPosts;
    } catch (error) {
      throw error;
    }
  };
    