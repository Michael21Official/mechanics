// db.ts

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'lolysteMem.com3',
  database: 'mechanics_db',
  port: 3306,
  connectionLimit: 10,
});

// Variable to track the connection status
let isConnected = false;

// Function to execute queries
const executeQuery = async (query: string, values?: any[]): Promise<any> => {
  if (!isConnected) {
    // Log a message if not connected
    console.log('Not connected to the database. Trying to connect...');
  }

  const connection = await pool.getConnection();

  try {
    const [rows] = await connection.query(query, values);

    // Set isConnected to true if the query is successful
    isConnected = true;

    return rows;
  } catch (error) {
    isConnected = false; // Set isConnected to false on error
    throw error;
  } finally {
    connection.release();
  }
};

export default executeQuery;

// Log a message indicating the connection status when the module is loaded
console.log('Database connection status:', isConnected ? 'Connected' : 'Not connected');
