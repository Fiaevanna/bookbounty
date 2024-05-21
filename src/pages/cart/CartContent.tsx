import styles from "./CartContent.module.css";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import HeartIcon from "@/components/Likes";
import { getBooks } from "@/db/booksQueries";
import { SelectBooks, SelectBooksWithSeller } from "@/db/schema";
import { useState } from "react";

type Props = {
  imgsrc: string;
  title: string;
  author: string;
  price: number;
  ID: SelectBooks[];
  dbBooks: SelectBooksWithSeller[];
};

const CartContent = ({ dbBooks, author, title, price, imgsrc }: Props) => {
  const [books, setBooks] = useState(dbBooks);
  

  const handelOnRemove = ({ ID }: Props) => {
    setBooks((book) => book.filter((book) => book.ID !== book.ID));
    
  };
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={"data:image/jpeg;base64," + imgsrc}
            fill
            alt=""
          ></Image>
        </div>
        <div className={styles.textContentParent}>
          <div className={styles.textWrapper}>
            <p className={styles.title}>{title}</p>
            <p>{author}</p>
            <p className={styles.price}>{price} KR</p>
            <div className={styles.iconWrapper}>
              <Trash2 className={styles.trash2} size={17} onClick={() => {}}/>
              <p>remove</p>
              <p>/</p>
              <HeartIcon />
              <p>add to favorites</p>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default CartContent;

export const getServerSideProps = async () => {
  const books = await getBooks(false);

  return {
    props: {
      dbBooks: books,
    },
  };
};
