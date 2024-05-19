import path from "path";
import { db } from "./db";
import { InsertUsers, InsertBooks, booksTable, usersTable } from "./schema";
import fs from "fs";
/* Hämta alla användare via clerks api https://clerk.com/docs/reference/backend-api/tag/Users 

för att sedan loopa igenom och skapa test data för vare användare 

*/

/* Här omvandlar jag bilderna till base64 som omvandlar bilden till en string  */

const convertImage64 = (fileName: string) => {
  const currentFolder = __dirname;
  const imagePath = path.resolve(currentFolder, `../../public/${fileName}`);

  let bitmap = fs.readFileSync(imagePath);
  return Buffer.from(bitmap).toString("base64");
};

// Mockdata för användare (säljare)
const users: InsertUsers[] = [
  {
    ID: "seller1",
    fullName: "Doris Malop",
    address: "kolgatan 4",
    email: "dm@example.com",
    postalCode: "12345",
    city: "Solna",
    country: "Sverige",
    phone: 1224567890,
    profileImage: "profile_image_seller1.jpg",
  },
  {
    ID: "seller2",
    fullName: "Sofia Andersen",
    address: "jallagatan 5s",
    email: "sa@example.com",
    postalCode: "67890",
    city: "Norrland",
    country: "Sverige",
    phone: 9876543210,
    profileImage: "profile_image_seller2.jpg",
  },
  {
    ID: "seller3",
    fullName: "Joakim Allen",
    address: "majsgatan 18",
    email: "seller3@example.com",
    postalCode: "54321",
    city: "Malmö",
    country: "Sverige",
    phone: 9871236440,
    profileImage: "profile_image_seller3.jpg",
  },
  {
    ID: "seller4",
    fullName: "Adam Adamsson",
    address: "solgatan 5",
    email: "adamAdamsson@example.com",
    postalCode: "12345",
    city: "Göteborg",
    country: "Sverige",
    phone: 1233567890,
    profileImage: "profile_image_seller1.jpg",
  },
  {
    ID: "seller5",
    fullName: "Anna Fresk",
    address: "fågelvägen 23",
    email: "fresk98@example.com",
    postalCode: "67890",
    city: "Stockholm",
    country: "Sverige",
    phone: 2226543210,
    profileImage: "profile_image_seller2.jpg",
  },
  {
    ID: "seller6",
    fullName: "Felicia Brun",
    address: "gunnargatan 500",
    email: "seller6@example.com",
    postalCode: "54321",
    city: "Hökarengen",
    country: "Sverige",
    phone: 7871236540,
    profileImage: "profile_image_seller3.jpg",
  },
];

// Mockdata för böcker
const books: InsertBooks[] = [
  {
    title: " The adventures if sherlock holmes",
    bookCover: convertImage64("booksherlock.jpg"),
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "Arthur Conan Doyle",
    bookDescription:
      "When Sir Arthur Conan Doyle introduced the world to Sherlock Holmes and Dr Watson in 1887's A Study in Scarlet, a true icon of literature was born. Since then, their humble address at 221B Baker Street has become almost as famous as the great detective himself, with the incredible popularity of Sherlock Holmes's adventures never wavering over the last 130 years. Bound in a rich, collector's cover, this deluxe and expansive edition, produced in association with The Sherlock Holmes Museum at 221B Baker Street, is the definitive collection for fans of the great detective. It contains all of Conan Doyle's stories four novels and a colossal 56 short stories complete and unabridged, encompassing the entirety of the legendary author's Sherlock Holmes work.",
    userDescription:
      "classic book and giving excitement, condition of book is good",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[0].ID,
    buyerUserID: null,
    isSold: false,
  },
  {
    title: "The catcher in the rye",
    bookCover: convertImage64("bookrye.jpg"),
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "J D Salinger",
    bookDescription:
      "The brilliant, funny, meaningful novel (The New Yorker) that established J. D. Salinger as a leading voice in American literature--and that has instilled in millions of readers around the world a lifelong love of books.  If you really want to hear about it, the first thing youll probably want to know is where I was born, and what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days",
    userDescription:
      "book in good condition, fun and giving, this book will make you happy ",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[1].ID,
    buyerUserID: null,
    isSold: false,
  },
  {
    title: "The hobbit",
    bookCover: convertImage64("bookhobbit.jpg"),
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "J R R Tolkien",
    bookDescription:
      "The popular paperback edition of J.R.R. Tolkien's classic masterpiece, illustrated for the first time with Tolkien's own painting originally created by him for the first edition, and featuring brand new reproductions of all his drawings and maps. The Hobbit is a tale of high adventure, undertaken by a company of dwarves in search of dragon-guarded gold. A reluctant partner in this perilous quest is Bilbo Baggins, a comfort-loving unambitious hobbit, who surprises even himself by his resourcefulness and skill as a burglar. Encounters with trolls, goblins, dwarves, elves and giant spiders, conversations with the dragon, Smaug, and a rather unwilling presence at the Battle of Five Armies are just some of the adventures that befall Bilbo. Bilbo Baggins has taken his place among the ranks of the immortals of children's fiction. Written by Professor Tolkien for his own children, The Hobbit met with instant critical acclaim when published.",
    userDescription:
      "This book was great exiting and fun, condition of book is great and hopefully you will enjoy reading this as much as I did it's a classic",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[0].ID,
    buyerUserID: null,
    isSold: false,
  },
  {
    title: "1984",
    bookCover: convertImage64("book1984.jpg"),
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "George Orwell",
    bookDescription:
      "The perfect edition for any Orwell enthusiasts' collection, discover the classic dystopian masterpiece beautifully reimagined by renowned street artist Shepard Fairey Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities. Despite the police helicopters that hover and circle overhead, Winston and Julia begin to question the Party; they are drawn towards conspiracy. Yet Big Brother will not tolerate dissent - even in the mind. For those with original thoughts they invented Room 101. . . First published in 1949, 1984 is George Orwell's terrifying vision of a totalitarian future in which everything and everyone is slave to a tyrannical regime.",
    userDescription:
      "Right up there among my favourite books . . . I read it again and again' Margaret Atwood 'More relevant to today than almost any other book that you can think of. Book look fine and like new",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[1].ID,
    buyerUserID: null,
    isSold: false,
  },
  {
    title: "Crime and punishment",
    bookCover: convertImage64("bookcrime.jpg"),
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "Fyodor Dostoevsky",
    bookDescription:
      "Translated by Constance Garnett with an Introduction and Notes by Dr Keith Carabine, University of Kent at Canterbury. Crime and Punishment is one of the greatest and most readable novels ever written. From the beginning we are locked into the frenzied consciousness of Raskolnikov who, against his better instincts, is inexorably drawn to commit a brutal double murder. From that moment on, we share his conflicting feelings of self-loathing and pride, of contempt for and need of others, and of terrible despair and hope of redemption: and, in a remarkable transformation of the detective novel, we follow his agonised efforts to probe and confront both his own motives for, and the consequences of, his crime. The result is a tragic novel built out of a series of supremely dramatic scenes that illuminate the eternal conflicts at the heart of human existence: most especially our desire for self-expression and self-fulfilment, as against the constraints of morality and human laws; and our agonised awareness of the world's harsh injustices and of our own mortality, as against the mysteries of divine justice and immortality.",
    userDescription:
      "Scary book but really good, condition of book is good. I highly recommend to read this",
    ratingScore: Math.floor(Math.random() * 5) + 1,
    sellerUserID: users[0].ID,
    buyerUserID: null,
    isSold: false,
  },
  {
    title: "The great gatsby",
    bookCover: convertImage64("bookgatsby.jpg"),
    price: Math.floor(Math.random() * 100) + 1,
    releaseYear: 2000 + Math.floor(Math.random() * 25),
    authorName: "F Scott Fitzgerald",
    bookDescription:
      "The twentieth-century masterpiece, the authoritative new edition** With a new foreword by Jesmyn Ward, author of the Women's Prize-shortlisted Sing, Unburied, Sing 'There was music from my neighbour's house through the summer nights. In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.' Enigmatic, intriguing and fabulously wealthy, Jay Gatsby throws lavish parties at his West Egg mansion to impress Daisy Buchanan, the object of his obsession, now married to bullish Tom Buchanan. Over a Long Island summer, his neighbour Nick Carraway, a writer and a cousin to Daisy, looks on as Gatsby and Daisy's affair deepens. Tragedy looms in F. Scott Fitzgerald's masterpiece third novel, frequently named among the best novels of the twentieth century. Praise for The Great Gatsby: 'A classic, perhaps the supreme American novel' Sunday Times 'More than an American classic; it's become a defining document of the national psyche, a creation myth, the Rosetta Stone of the American dream' Guardian 'F. Scott Fitzgerald was better than he knew, for in fact and in the literary sense he invented a generation' New York Times 'An unquiet masterpiece whose mystery never fails to exert its power' Robert McCrum, Observer, 'The 100 Best Novels in English'",
    userDescription:
      " I rate the book 8/10. I thoroughly enjoyed the story and believe future readers will too. Through Okonkwos journey, the novel provides   deep insights into the vulnerability of identity and the repercussions of resisting inevitable change. The book is in great condition",
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
insertMockData();
