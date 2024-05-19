import { db } from "./db";
import { InsertUsers, InsertBooks, booksTable, usersTable } from "./schema";


/* Hämta alla användare via clerks api https://clerk.com/docs/reference/backend-api/tag/Users 

för att sedan loopa igenom och skapa test data för vare användare 

*/


// Mockdata för användare (säljare)
const users: InsertUsers[] = [
  {
    ID: "seller1",
    fullName: "Seller 1",
    address: "kolgatan 4",
    email: "seller1@example.com",
    postalCode: "12345",
    city: "City 1",
    country: "Country 1",
    phone: 1234567890,
    profileImage: "profile_image_seller1.jpg",
  },
  {
    ID: "seller2",
    fullName: "Seller 2",
    address: "jallagatan 5s",
    email: "seller2@example.com",
    postalCode: "67890",
    city: "City 2",
    country: "Country 2",
    phone: 9876543210,
    profileImage: "profile_image_seller2.jpg",
  },
  {
    ID: "seller3",
    fullName: "Seller 3",
    address: "majsgatan 18",
    email: "seller3@example.com",
    postalCode: "54321",
    city: "City 3",
    country: "Country 3",
    phone: 9871236540,
    profileImage: "profile_image_seller3.jpg",
  },
];

// Mockdata för böcker
const books: InsertBooks[] = [
  {
    
    title: "Book 1",
    bookCover: "book_cover_1.jpg",
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "Author 1",
    bookDescription: "Description of Book 1",
    userDescription: "User description for Book 1",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[0].ID,
    buyerUserID: null,
    isSold: false,
  },
  {
    
    title: "Book 2",
    bookCover: "book_cover_2.jpg",
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "Author 2",
    bookDescription: "Description of Book 2",
    userDescription: "User description for Book 2",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[1].ID,
    buyerUserID: null,
    isSold: false,
  },
  // och så vidare för resterande böcker...
];

 const insertMockData = async () => {
  await db.insert(usersTable).values(users);
  await db.insert(booksTable).values(books);
};
insertMockData()