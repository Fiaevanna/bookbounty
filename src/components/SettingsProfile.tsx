import Image from "next/image";
import styles from "./SettingsProfile.module.css";

type Props = {
  src: string;
  userName: string;
};

const SettingsProfile = ({ src, userName }: Props) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <Image src={src} fill alt="profile"></Image>
        </div>
        <p className={styles.userName}>@{userName}</p>
      </div>
    </>
  );
};

export default SettingsProfile;
