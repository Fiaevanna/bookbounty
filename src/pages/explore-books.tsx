import PageTitle from "@/components/PageTitle";
import styles from "@/styles/ExploreBooks.module.css";
import AppShell from "@/components/AppShell";
import Image from "next/image";
import InputField from "@/components/InputField";
import { Search } from "lucide-react";
import BookLayout from "@/components/BookLayout";

const books = [
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
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Bitches aint shit we don't love them hoes",
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
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Bitches aint shit we don't love them hoes",
  },
  
];

const ExploreBooks = () => {
  return (
    <>
      <AppShell
        title={<PageTitle className={styles.title} text="EXPLORE BOOKS" />}
      >
        <div className={styles.img}>
          <Image
            src="/explorebookspage.png"
            fill
            alt="munks reading books"
          ></Image>
        </div>

        <InputField rightIcon={<Search className={styles.icon} size={15} />} />
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
