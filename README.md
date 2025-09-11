# Next.js Dashboard Tutorial

This is the starter template for the Next.js dashboard tutorial with database setup.

## Getting Started

### 1. Database Setup

This project uses Vercel Postgres for database management. Follow these steps to set up your database:

1. **Create a Vercel account** if you don't have one at [vercel.com](https://vercel.com)

2. **Create a new Postgres database**:
   - Go to your Vercel dashboard
   - Click on the "Storage" tab
   - Click "Create Database"
   - Select "Postgres"
   - Give your database a name
   - Select a region close to your users

3. **Copy environment variables**:
   - After creating the database, go to the ".env.local" tab
   - Copy all the environment variables
   - Create a `.env.local` file in your project root
   - Paste the environment variables

4. **Seed the database**:
   ```bash
   npm run seed
   ```

### 2. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Schema

The project includes the following tables:

- **users**: Store user authentication data
- **customers**: Store customer information
- **invoices**: Store invoice data linked to customers
- **revenue**: Store monthly revenue data

## Environment Variables

Create a `.env.local` file with the following variables (get these from your Vercel Postgres dashboard):

```env
POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```

## Learn More

This project follows the [Next.js Dashboard Tutorial](https://nextjs.org/learn/dashboard-app/setting-up-your-database) database setup chapter.
