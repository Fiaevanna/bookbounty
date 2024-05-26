import { eq } from "drizzle-orm";
import { db } from "@/db/db";
import { booksTable, SelectBooksWithSeller } from "@/db/schema";
/* getBooks */
export const getBooks = async (isSold: boolean) => {
  // Kod för att hämta böcker som är inte sålda med drizzle
  const res = db.query.booksTable.findMany({
    with: { seller: true },
    where: eq(booksTable.isSold, isSold),
  });
  return res;
};

export const getBook = async (ID: number) => {
  // Kod för att hämta böcker som är inte sålda med drizzle
  const res = db.query.booksTable.findFirst({
    with: { seller: true },
    where: eq(booksTable.ID, ID)
  });
  return res;
};

const test = async () => {
  console.log(await getBook(100));
};
test()

/* // BOOKS
addBookForSale




getBook


getMyFavouriteBooks
getMyCartBooks

addBookToCart
deleteBookFromCart
deleteBook

getMyBooksForSale
addBookToFavourites
deleteBookFromFavourites


// USERS

createUser
updateUser
getUser

 */
