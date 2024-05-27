import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import {
  usersTable,
  booksTable,
  likesTable,
  cartItemsTable,
  booksRelations,
  likesRelations
} from "@/db/schema";
const client = createClient({
  url: process.env.TURSO_CONNECTION_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});


// Denna db variable importerar vi för att använda drizzle/vår databas
// Den tar emot saker i schema för att ge oss autokorret och för att ha info om vår databas struktur
export const db = drizzle(client, {
  schema: { usersTable, booksTable, likesTable, cartItemsTable, booksRelations, likesRelations },
});
