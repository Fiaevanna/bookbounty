import PageTitle from "@/components/PageTitle";
import styles from "@/styles/exploreBooks.module.css";
import AppShell from "@/components/AppShell";
import Image from "next/image";
import InputField from "@/components/InputField";
import { Search } from "lucide-react";
import BookLayout from "@/components/BookLayout";
import { db } from "@/db/db";
import { booksTable, SelectBooks, SelectUsers, SelectBooksWithSeller } from "@/db/schema";
import { eq, exists, sql } from "drizzle-orm";

type Props = {
  books: SelectBooksWithSeller[];
};

const ExploreBooks = ({ books }: Props) => {
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
                  key={book.ID}
                  imgsrc={book.bookCover}
                  userName={book.seller.fullName}
                  price={book.price}
                  bookTitle={book.title}
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

export const getServerSideProps = async () => {
  const res = await db.query.booksTable.findMany({
    with: { seller: true },
    where: eq(booksTable.isSold, false),
  });

  console.log(res);
  return {
    props: {
      books: res,
    },
  };
};
