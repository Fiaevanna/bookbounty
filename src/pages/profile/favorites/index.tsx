import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import SettingsProfile from "@/components/SettingsProfile";
import styles from "./Favorites.module.css";
import { Heart } from "lucide-react";
import BookLayout from "@/components/BookLayout";
import { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { getLikedBooks } from "@/db/booksQueries";
import { SelectLikesAll } from "@/db/schema";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

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

type Props = {
  likedBooks: SelectLikesAll[]
}

const Favorites = ({ likedBooks }: Props) => {
  const user = useUser();
  const router = useRouter();

  return (
    <>
      <AppShell title={<PageTitle text="MY FAVORITES" />}>
        <SettingsProfile src={"/static/jojo.jpg"} userName={"Allen"} />
        <div className={styles.wrapper}>
          <p className={styles.title}>MY SELECTION </p>
          <Heart size={16} fill="" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.wrapperBookTextContent}>
          {likedBooks.map((book) => {
            return (
              <>
                <BookLayout
                  ID={book.bookID}
                  key={book.bookID}
                  imgsrc={book.book.bookCover}
                  userName={user.user?.username || ""}
                  price={book.book.price}
                  bookTitle={book.book.title}
                  bookIsLiked={true}
                  onLikeChange={() => router.reload()}
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

export const getServerSideProps = async ({ req }: { req: NextRequest }) => {
  const { userId } = getAuth(req);
  const books = userId ? await getLikedBooks(userId): [];
  return {
    props: {
      likedBooks: books,
    },
  };
};