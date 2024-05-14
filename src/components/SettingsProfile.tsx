import Image from "next/image";
import styles from "./SettingsProfile.module.css";

type Props = {
  src: string;
  userName: string;
  className?: string;
};

const SettingsProfile = ({ src, userName, className }: Props) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <Image className={`${styles.rootImg}  ${className}`} src={src} fill alt="profile"></Image>
        </div>
        <p className={styles.userName}>@{userName}</p>
      </div>
    </>
  );
};

export default SettingsProfile;
