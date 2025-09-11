import { sql } from '@vercel/postgres';

export async function connectToDatabase() {
  try {
    await sql`SELECT 1`;
    console.log('Database connected successfully');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}