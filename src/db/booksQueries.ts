import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { booksTable, SelectBooksWithSeller } from "@/db/schema";

export const getBooks = async (isSold: boolean) => {
     // Kod för att hämta böcker som är inte sålda med drizzle
  const res = db.query.booksTable.findMany({
    with: { seller: true },
    where: eq(booksTable.isSold, isSold),
  });
  return res;
};
