import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import UserInfo from "@/pages/book-details/_components/UserInfo";
import BookContent from "./_components/BookContent";
import Button from "@/components/Button";
import styles from "./_components/BookContent.module.css"

const BookDetails = () => {
  return (
    <>
      <AppShell title={<PageTitle text="BOOK DETAILS" />}>
        <UserInfo />
        <BookContent
          bookTitle="THE GREAT GATSBY"
          imgsrc="/bookgatsby.jpg"
          releaseYear="Release year: 1990"
          price="50,00 KR"
          author="Chinua Achebe"
          description="Things Fall Apart explores one man's futile resistance to the devaluing of his Igbo traditions by British political and religious forces and his despair as his community capitulates to the powerful new order."
        />
        <Button to="/cart" text="ADD TO CART" className={styles.homePBtn}>
          ADD TO CART
        </Button>
      </AppShell>
    </>
  );
};

export default BookDetails;
