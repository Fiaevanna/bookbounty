import { eq, and } from "drizzle-orm";
import { db } from "@/db/db";
import { InsertUsers, usersTable, likesTable } from "@/db/schema";

// Skapar en användare i databasen via en insert, tar en användare som ska skapas som input
export const createUser = async (user: InsertUsers) => {
  const res = await db.insert(usersTable).values(user);
  return res;
};

export const likeBook = async (userID: string, bookID: number) => {
  const res = await db.insert(likesTable).values({
    userID,
    bookID,
  });
  return res;
};

export const unlikeBook = async (userID: string, bookID: number) => {
  const res = await db
    .delete(likesTable)
    .where(and(eq(likesTable.userID, userID), eq(likesTable.bookID, bookID)));
  return res;
};

/* USERS

createUser
updateUser
getUser

 */
