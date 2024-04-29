import Image from "next/image";
import styles from "@/components/BookLayout.module.css";

type Props = {
  imgsrc: string;
  userName: string;
  price: string;
  bookTitle: string;
};

const BookLayout = ({ imgsrc, userName, price, bookTitle }: Props) => {
  return (
    <div className={styles.parentWrapper}>
     <div className={styles.img}> <Image  src={imgsrc} fill alt=""></Image></div>
      <div className={styles.wrapperBookTextContent}>
        <p className={styles.userName}>{userName}</p>
        <p className={styles.price}>{price}</p>
        <p className={styles.bookTitle}>{bookTitle}</p>
      </div>
    </div>
  );
};

export default BookLayout;

/* kontrollera logik för hjärtat här  */
