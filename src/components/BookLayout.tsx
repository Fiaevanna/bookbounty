import Image from "next/image";
import styles from "@/components/BookLayout.module.css";
import { Heart } from "lucide-react";

type Props = {
  imgsrc: string;
  userName: string;
  price: string;
  bookTitle: string;
};

const BookLayout = ({ imgsrc, userName, price, bookTitle }: Props) => {
  return (
    <div className={styles.parentWrapper}>
      <div className={styles.imgWrapper}>
        <Image src={imgsrc} fill alt=""></Image>
      </div>
      <div className={styles.wrapperBookTextContent}>
        <div className={styles.heartAndUserNameWrapper}>
          <p>{userName}</p>
          <Heart size={13} />
        </div>

        <p className={styles.price}>{price}</p>
        <p className={styles.bookTitle}>{bookTitle}</p>
      </div>
    </div>
  );
};

export default BookLayout;

/* kontrollera logik för hjärtat här  */
