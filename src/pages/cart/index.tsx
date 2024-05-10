import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import styles from "./cart.module.css";
import CartContent from "./CartContent";
import Button from "@/components/Button";


/* Här ska hantering av trash can hanteras  */

type Book = {
  img: string;
  title: string;
  author: string;
  price: string;
  priceRaw: number;
};

type Props = {
  bookCart: Book[];
  shipping: number;
  totalSum: number;
};

const Cart = ({ bookCart, shipping, totalSum }: Props) => {
  return (
    <>
      <AppShell title={<PageTitle className={styles.title} text="CART" />}>
        <div className={styles.line}></div>
        {bookCart.map((book) => {
          return (
            <>
              <CartContent
                img={book.img}
                title={book.title}
                author={book.author}
                price={book.price}
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

export const getServerSideProps = () => {
  const bookCart = [
    {
      img: "/bok.png",
      title: "CRAZY NIGHT",
      author: "Lola Lisa",
      price: "70,00 KR",
      priceRaw: 70.5,
    },
    {
      img: "/bok3.png",
      title: "NIGHT",
      author: "Lars lok",
      price: "100,00 KR",
      priceRaw: 100.0,
    },
    {
      img: "/bok4.png",
      title: "GRÖNSKAN ÄR HÄR",
      author: "Steeven bloom",
      price: "40,00 KR",
      priceRaw: 40.0,
    },
    {
      img: "/bok6.png",
      title: "LUSEM",
      author: "Agnes Krans",
      price: "100,00 KR",
      priceRaw: 100.0,
    },
    {
      img: "/bok2.png",
      title: "NIGHT",
      author: "Lars lok",
      price: "100,00 KR",
      priceRaw: 100.0,
    },
  ];
  const shipping = 49.0;

  const calcTotalSum = () => {
    let sum = 0;
    bookCart.forEach(({ priceRaw }) => (sum += priceRaw));
    return sum + shipping;
  };

  return {
    props: {
      bookCart,
      shipping,
      totalSum: calcTotalSum(),
    },
  };
};
