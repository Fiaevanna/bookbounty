import Image from "next/image";
import styles from "./UserInfoBookDetails.module.css"

const UserInfoBookDetails = () => {
  return (
    <>
      <div className={styles.userParent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imgRatingUsernameWrapper}>
            <div className={styles.profileImgWrapper}>
              <Image
                className={styles.profileImg}
                src="/jojo.jpg"
                fill
                alt="profile"
              ></Image>
            </div>
            <div className={styles.userName}>
              <p>@Allen</p>
            </div>
            <div className={styles.rating}>
              <p>rating</p>
            </div>
          </div>
          <div className={styles.userDescription}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              aliquam impedit labore velit ratione repellendus magni in, autem
              laborum illum incidunt suscipit, iusto, harum veritatis obcaecati
              tenetur saepe tempora dolor!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoBookDetails;
