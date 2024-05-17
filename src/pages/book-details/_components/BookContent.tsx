import HeartIcon from "@/components/Likes";
import styles from "./BookContent.module.css";
import Image from "next/image";

type Props = {
  bookTitle: string;
  imgsrc: string;
  releaseYear: string;
  price: string;
  author: string;
  description: string;
};

const BookContent = ({
  bookTitle,
  imgsrc,
  releaseYear,
  price,
  author,
  description,
}: Props) => {
  return (
    <div className={styles.bookLayout}>
      <p className={styles.title}>{bookTitle}</p>
      <div className={styles.imgWrapper}>
        <Image className={styles.img} src={imgsrc} fill alt=""></Image>
      </div>

      <div className={styles.textContentWrapper}>
        <div className={styles.wrapperHeartYear}>
          <div className={styles.releaseYearWrapper}>
            <p className={styles.releaseYear}>{releaseYear}</p>
          </div>
          <div className={styles.heartWrapper}>
            <HeartIcon />
          </div>
        </div>
        <p className={styles.price}>{price}</p>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default BookContent;
