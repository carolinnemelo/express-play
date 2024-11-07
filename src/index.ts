
import { createApp } from "./app";
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

createApp().listen(3000, () => {
  console.log(`Server start on `);
});

