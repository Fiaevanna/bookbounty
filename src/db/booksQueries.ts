import { eq, and, or } from "drizzle-orm";
import { db } from "@/db/db";
import { InsertBooks, booksTable, likesTable, usersTable } from "@/db/schema";
/* getBooks */
export const getBooks = async (isSold: boolean, userId?: string | null) => {
  // Kod för att hämta böcker som är inte sålda med drizzle
  let books = await db.query.booksTable.findMany({
    with: { seller: true },
    where: eq(booksTable.isSold, isSold),
  });

  // Här loppar jag igenom varje book för att se om den nuvarande användare har likat boken
  // OM vi har en användar id
  // OM vi inte har användare får vi tillbaka böckerna som de är i den sista return
  if (userId) {
    // Hämta alla likes
    const likes = await db.query.likesTable.findMany({
      where: or(
        ...books.map((book) =>
          and(eq(likesTable.bookID, book.ID), eq(likesTable.userID, userId))
        )
      ),
    });

    // För varje book, lägg till om vi har likat
    books = books.map((book) => {
      const likeForBook = likes.find((like) => like.bookID === book.ID);

      if (likeForBook) {
        return {
          ...book,
          isLiked: true,
        };
      }

      return {
        ...book,
        isLiked: false,
      };
    });
  }

  return books;
};

/* getBooks */
export const getLikedBooks = async (userId: string) => {
  const likes = await db.query.likesTable.findMany({
    where: eq(likesTable.userID, userId),
    with: {
      book: {
        with: {
          seller: true
        }
      }
    }
  });


  return likes;
};

export const getBook = async (ID: number) => {
  // Kod för att hämta böcker som är inte sålda med drizzle
  const res = db.query.booksTable.findFirst({
    with: { seller: true },
    where: eq(booksTable.ID, ID),
  });
  return res;
};


export const addBookForSale = async (book: InsertBooks) => {
  // Kod för att hämta böcker som är inte sålda med drizzle
  const res = db.insert(booksTable).values(book)
  return res;
};


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
