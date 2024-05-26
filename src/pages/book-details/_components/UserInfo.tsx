import Image from "next/image";
import styles from "./UserInfoBookDetails.module.css";
import StarRating from "@/components/StarRating";

const UserInfo = () => {
  return (
    <>
      <div className={styles.profileParent}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.profileImg}
              src="/static/jojo.jpg"
              fill
              alt="profile"
            ></Image>
          </div>
          <div className={styles.contentLayout}>
            <p className={styles.userName}>@Allen's book review</p>
          </div>
        </div>
      </div>
      <div className={styles.userDescription}>
        <p className={styles.descriptionText}>
          I rate the book 8/10. I thoroughly enjoyed the story and believe
          future readers will too. Through Okonkwos journey, the novel provides
          deep insights into the vulnerability of identity and the repercussions
          of resisting inevitable change. The book is in great condition!
        </p>
        <div className={styles.star}>
          <p className={styles.starLabel}>Book rating:</p>
          <StarRating />
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default UserInfo;
