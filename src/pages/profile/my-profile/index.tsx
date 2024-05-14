import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import SettingsProfile from "@/components/SettingsProfile";
import BookLayout from "@/components/BookLayout";
import styles from "./MyProfile.module.css";
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
    bookTitle: "shit we don't love them ",
  },
];

const MyProfile = () => {
  return (
    <>
      <AppShell title={<PageTitle text="MY PROFILE" />}>
        <div className={styles.imgWrapper}>
          <SettingsProfile
            className={styles.img}
            src={"/jojo.jpg"}
            userName={"Allen"}
          />
        </div>

        <div className={styles.titleWrapperSale}>
          <p className={styles.title}>MY BOOKS FOR SALE</p>
          <div className={styles.lineSale}></div>
        </div>
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
        <div className={styles.titleWrapperSold}>
          <p className={styles.titleSold}>MY SOLD BOOKS</p>
          <div className={styles.lineSold}></div>
        </div>
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

export default MyProfile;
