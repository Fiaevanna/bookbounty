import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import SettingsProfile from "@/components/SettingsProfile";
import styles from "./Favorites.module.css";
import { Heart } from "lucide-react";
import BookLayout from "@/components/BookLayout";

const books = [
  {
    imgsrc: "/bok.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok5.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok2.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },

  {
    imgsrc: "/bok4.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Things fall apart",
  },
  {
    imgsrc: "/bok6.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },
  {
    imgsrc: "/bok3.png",
    userName: "@Allen",
    price: "50,00 KR",
    bookTitle: "Days of sadness",
  },

];

const Favorites = () => {
  return (
    <>
      <AppShell title={<PageTitle text="MY FAVORITES" />}>
        <SettingsProfile src={"/jojo.jpg"} userName={"Allen"} />
        <div className={styles.wrapper}>
          <p className={styles.title}>MY SELECTION </p>
          <Heart size={16} fill="" />
        </div>
        <div className={styles.line}></div>
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

export default Favorites;
