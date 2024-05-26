import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import styles from "./cart.module.css";
import CartContent from "./CartContent";
import Button from "@/components/Button";
import { getBooks } from "@/db/booksQueries";
import { useState } from "react";
import { SelectBooksAll } from "@/db/schema";

/* Här ska hantering av trash can hanteras  */

type Props = {
  shipping: number;
  totalSum: number;
  priceRaw: number;
  dbBooks: SelectBooksAll[];
};

const Cart = ({ dbBooks, shipping, totalSum }: Props) => {
  const [books, setBooks] = useState(dbBooks);

  const handelOnRemove = (ID: Number) => {
    setBooks((book) => book.filter((book) => book.ID !== ID));
    
  };
  return (
    <>
      <AppShell title={<PageTitle className={styles.title} text="CART" />}>
        <div className={styles.line}></div>
        {books.map((book) => {
          return (
            <>
              <CartContent
                key={book.ID}
                imgsrc={book.bookCover}
                title={book.title}
                author={book.authorName}
                price={book.price}
                handelOnRemove={handelOnRemove}
                ID={book.ID}
                dbBooks={books}
              />
            </>
          );
        })}
        <div className={styles.totalSumParent}>
          <div className={styles.sumTitleWrapper}>
            <p>TOTAL SUM</p>
          </div>
          <div className={styles.shippingParent}>
            <div className={styles.shippingWrapper}>
              <p>Shipping</p>
              <p className={styles.shipping}>{shipping.toFixed(2)} kr</p>
            </div>
            <div className={styles.totalSumWrapper}>
              <p>Total sum (inc.ship)</p>
              <p className={styles.totalSum}>{totalSum.toFixed(2)} kr</p>
            </div>
          </div>
          <Button
            to="/checkout"
            text="GO TO CHECKOUT"
            className={styles.homePBtn}
          >
            GO TO CHECKOUT
          </Button>
        </div>
      </AppShell>
    </>
  );
};

export default Cart;

/* BACKEND uträkningen sker direkt på backend innan den renderas på clienten 
https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
*/

export const getServerSideProps = async () => {
  const books = await getBooks(false);
  const shipping = 49.0;

  const calcTotalSum = () => {
    let sum = 0;
    books.forEach(({ price }) => (sum += price));
    return sum + shipping;
  };

  return {
    props: {
      dbBooks: books,
      shipping,
      totalSum: calcTotalSum(),
    },
  };
};
