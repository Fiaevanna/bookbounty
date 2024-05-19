import PageTitle from "@/components/PageTitle";
import styles from "@/styles/exploreBooks.module.css";
import AppShell from "@/components/AppShell";
import Image from "next/image";
import InputField from "@/components/InputField";
import { Search } from "lucide-react";
import BookLayout from "@/components/BookLayout";

const books = [
  {
    imgsrc: "/book1984.jpg",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bookcrime.jpg",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bookgatsby.jpg",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bookhobbit.jpg",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bookrye.jpg",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/booksherlock.jpg",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "hej hej hej",
  },
];

const ExploreBooks = () => {
  return (
    <>
      <AppShell
        title={<PageTitle className={styles.title} text="EXPLORE BOOKS" />}
      >
        <div className={styles.img}>
          <Image src="/exploreBImg.jpg" fill alt="munks reading books"></Image>
        </div>

        <InputField
          className={styles.searchInput}
          placeholder="Search..."
          rightIcon={<Search className={styles.icon} size={15} />}
        />
        <div className={styles.wrapperBookTextContent}>
          {books.map((book) => {
            return (
              <>
                <BookLayout
                  key={book.bookTitle}
                  imgsrc={book.imgsrc}
                  userName={book.userName}
                  price={book.price}
                  bookTitle={book.bookTitle}
                />
              </>
            );
          })}
        </div>
      </AppShell>
    </>
  );
};

export default ExploreBooks;
