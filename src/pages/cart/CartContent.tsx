import styles from "./CartContent.module.css";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import HeartIcon from "@/components/HeartIcon";
import Button from "@/components/Button";

type Props = {
  img: string;
  title: string;
  author: string;
  price: string;
 
};

const CartContent = ({
  img,
  title,
  author,
  price,
}: Props) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.imgWrapper}>
          <Image className={styles.img} src={img} fill alt=""></Image>
        </div>
        <div className={styles.textContentParent}>
          <div className={styles.textWrapper}>
            <p className={styles.title}>{title}</p>
            <p>{author}</p>
            <p className={styles.price}>{price}</p>
            <div className={styles.iconWrapper}>
              <Trash2 className={styles.trash2} size={17} />
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
