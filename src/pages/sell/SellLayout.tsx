import StarRating from "@/components/StarRating";
import styles from "./SellLayout.module.css";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

const SellLayout = () => {
  return (
    <>
      <div className={styles.parent}>
        <p className={styles.infoDescription}>
          Fill out your personal description of the book and the book's
          condition below.
        </p>
        <textarea className={styles.description}></textarea>

        <div className={styles.ratingParent}>
          <p className={styles.rating}>My book rating:</p>
          <StarRating />
          <div className={styles.line}></div>
        </div>

        <div className={styles.titleWrapper}>
          <p className={styles.title}>Book title:</p>
          <InputField type="text" className={styles.input} />
        </div>
        <div className={styles.btnContainer}>
          <Button className={styles.btn} text={"Upload book cover"}></Button>
        </div>

        <div className={styles.releaseYearWrapper}>
          <p className={styles.releaseYear}>Release year:</p>
          <InputField type="number" className={styles.input} />
        </div>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>Price:</p>
          <InputField type="number" className={styles.input} />
        </div>

        <div className={styles.authorWrapper}>
          <p className={styles.author}>Author:</p>
          <InputField type="text" className={styles.input} />
        </div>
        <div className={styles.bookDescriptionWrapper}>
          <p className={styles.bookDescription}>Book description:</p>
          <textarea className={styles.description}></textarea>
        </div>
        <div className={styles.bookContentWrapper}></div>
      </div>
    </>
  );
};

export default SellLayout;

/*   discription   Här vill du sen sätta någon funktion på inputfältets 
 value till this.value.toUpperCase() */

 /* se till att stjärnorna sätts och sparas  */