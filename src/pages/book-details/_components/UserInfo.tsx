import Image from "next/image";
import styles from "./UserInfoBookDetails.module.css";
import StarRating from "@/components/StarRating";

type Props = {
  profileImage: string | null;
  username?: string | null;
  userReview: string;
  bookRating: number;
};

/* https://thispersondoesnotexist.com/ */

const UserInfo = ({
  profileImage,
  username,
  userReview,
  bookRating,
}: Props) => {

  const defaultProfileImage = "/static/stefan-one.png"
  const uploadedProfileImage = "data:image/jpeg;base64," + profileImage

  return (
    <>
      <div className={styles.profileParent}>
        <div className={styles.card}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.profileImg}
              src={profileImage ? uploadedProfileImage : defaultProfileImage}
              fill
              alt="profile"
            ></Image>
          </div>
          <div className={styles.contentLayout}>
            <p className={styles.userName}>{`@${username}'s book review`}</p>
          </div>
        </div>
      </div>
      <div className={styles.userDescription}>
        <p className={styles.descriptionText}>{userReview}</p>
        <div className={styles.star}>
          <p className={styles.starLabel}>Book rating:</p>
          <StarRating defaultRating={bookRating} />
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

export default UserInfo;
