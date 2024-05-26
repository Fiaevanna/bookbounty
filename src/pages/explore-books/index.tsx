import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import styles from "@/styles/exploreBooks.module.css";
import AppShell from "@/components/AppShell";
import Image from "next/image";
import InputField from "@/components/InputField";
import { Search } from "lucide-react";
import BookLayout from "@/components/BookLayout";
import { SelectBooksAll } from "@/db/schema";
import { getBooks } from "@/db/booksQueries";

type Props = {
  dbBooks: SelectBooksAll[];
};

const ExploreBooks = ({ dbBooks }: Props) => {
  const [books, setBooks] = useState(dbBooks);
  const [search, setSearch] = useState("");

  console.log(dbBooks)

  return (
    <>
      <AppShell
        title={<PageTitle className={styles.title} text="EXPLORE BOOKS" />}
      >
        <div className={styles.img}>
          <Image src="/static/exploreBImg.jpg" fill alt="munks reading books"></Image>
        </div>

        <InputField
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
          placeholder="Search..."
          rightIcon={<Search className={styles.icon} size={15} />}
        />
        <div className={styles.wrapperBookTextContent}>
          {books
            .filter((book) => {
              return search.toLocaleLowerCase() === ""
                ? book
                : book.title.toLocaleLowerCase().includes(search) ||
                    book.authorName.toLocaleLowerCase().includes(search);
            })
            .map((book) => {
              return (
                <>
                  <BookLayout
                    key={book.ID}
                    ID={book.ID}
                    imgsrc={book.bookCover}
                    userName={book.seller.fullName}
                    price={book.price}
                    bookTitle={book.title}
                    bookIsLiked={book.isLiked ? true : false}
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

/* Här har jag min backend del, som hämtar alla böcker som inte är sålda och även hämtar användar id */

export const getServerSideProps = async () => {
  const books = await getBooks(false);
  return {
    props: {
      dbBooks: books,
    },
  };
};
