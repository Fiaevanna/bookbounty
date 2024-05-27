import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import UserInfo from "@/pages/book-details/_components/UserInfo";
import BookContent from "./_components/BookContent";
import Button from "@/components/Button";
import styles from "./_components/BookContent.module.css";
import { getBook } from "@/db/booksQueries";
import { SelectBooksAll } from "@/db/schema";
import { useUser } from "@clerk/nextjs";

type Props = {
  book: SelectBooksAll;
};

const BookDetails = ({ book }: Props) => {
  const user = useUser();
  return (
    <>
      {user && (
        <AppShell title={<PageTitle text="BOOK DETAILS" />}>
          <UserInfo
            profileImage={book.seller.profileImage}
            username={user.user?.username}
            userReview={book.userDescription}
            bookRating={book.ratingScore}
          />
          <BookContent
            bookTitle={book.title}
            imgsrc={book.bookCover}
            releaseYear={`Release year: ${book.releaseYear}`}
            price={`${book.price} KR`}
            author={book.authorName}
            description={book.bookDescription}
          />
          <Button to="/cart" text="ADD TO CART" className={styles.homePBtn}>
            ADD TO CART
          </Button>
        </AppShell>
      )}
    </>
  );
};

type Query = {
  bookId: string;
};

type ServerSideProps = { query: Query };

export const getServerSideProps = async ({ query }: ServerSideProps) => {
  const { bookId } = query;

  const book = await getBook(Number(bookId));

  return {
    props: {
      book,
    },
  };
};

export default BookDetails;
