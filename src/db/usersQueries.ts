import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { InsertUsers, usersTable } from "@/db/schema";

// Skapar en användare i databasen via en insert, tar en användare som ska skapas som input
export const createUser = async (user: InsertUsers) => {
  const res = await db.insert(usersTable).values(user);
  return res;
}




/* USERS

createUser
updateUser
getUser

 */
