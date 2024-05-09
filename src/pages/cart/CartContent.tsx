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
  sumTitle: string;
  totalSum: string;
  shipping: string;
};

const CartContent = ({
  img,
  title,
  author,
  price,
  sumTitle,
  shipping,
  totalSum,
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
      <div className={styles.totalSum}>
        <div className={styles.sumTitleWrapper}>
          <p className={sumTitle}>{sumTitle}</p>
        </div>
        <div className={styles.shippingWrapper}>
          <p className={shipping}>{shipping}</p>
        </div>
        <div className={styles.totalSumWrapper}>
          <p className={totalSum}>{totalSum}</p>
        </div>
        <Button
          to="/checkout"
          text="GO TO CHECKOUT"
          className={styles.homePBtn}
        >
          GO TO CHECKOUT
        </Button>
      </div>
    </>
  );
};

export default CartContent;
