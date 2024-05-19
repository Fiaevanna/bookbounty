import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import {
  usersTable,
  booksTable,
  likesTable,
  cartItemsTable,
  booksRelations
} from "@/db/schema";
const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});
export const db = drizzle(client, {
  schema: { usersTable, booksTable, likesTable, cartItemsTable, booksRelations },
});
