import styles from "./CartContent.module.css";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import HeartIcon from "@/components/Likes";
import { SelectBooksWithSeller } from "@/db/schema";


type Props = {
  ID: number;
  imgsrc: string;
  title: string;
  author: string;
  price: number;
  dbBooks: SelectBooksWithSeller[];
  handelOnRemove: (ID: number) => void;
};

const CartContent = ({
  author,
  title,
  price,
  imgsrc,
  handelOnRemove,
  ID,
}: Props) => {
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
              <Trash2
                className={styles.trash2}
                size={17}
                onClick={() => handelOnRemove(ID)}
              />
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
