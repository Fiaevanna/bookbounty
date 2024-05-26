import Image from "next/image";
import styles from "@/components/BookLayout.module.css";
import { Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type Props = {
  ID: number;
  imgsrc: string;
  userName: string;
  price: number;
  bookTitle: string;
};

const BookLayout = ({ ID, imgsrc, userName, price, bookTitle }: Props) => {
  const [filled, setFilled] = useState(false);

  return (
    <div className={styles.parentWrapper}>
      <Link className={styles.link} href={`/book-details/${ID}`}>
        <div className={styles.imgWrapper}>
          <Image src={"data:image/jpeg;base64," + imgsrc} fill alt=""></Image>
        </div>
      </Link>

      <div className={styles.heartAndUserNameWrapper}>
        <p>@{userName}</p>

        <Heart
          size={14}
          fill={filled ? "var(--HeaderTextColor)" : "none"}
          onClick={() => setFilled((prevState) => !prevState)}
        />
      </div>

      <div className={styles.wrapperBookTextContent}>
        <p className={styles.price}>{price} KR</p>
        <p className={styles.bookTitle}>{bookTitle}</p>
      </div>
      <div className={styles.cartWrapper}>
        <Link className={styles.link} href={"/cart"}>
          <p className={styles.bookTitle}>Add to cart</p>
        </Link>
      </div>
    </div>
  );
};

export default BookLayout;

/* add to cart, onClick add book to cart and alert with number to nav??  */
