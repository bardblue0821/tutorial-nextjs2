import { sql } from '@vercel/postgres';

async function testDatabaseConnection() {
  try {
    // This will only work when environment variables are properly set
    const result = await sql`SELECT NOW()`;
    console.log('✅ Database connection successful:', result.rows[0]);
    return true;
  } catch (error) {
    console.log('ℹ️  Database connection test requires environment variables to be set');
    console.log('   Please follow the setup instructions in the README.md');
    console.log('   Error details:', error instanceof Error ? error.message : 'Unknown error');
    return false;
  }
}

// Run the test
testDatabaseConnection();

export { testDatabaseConnection };