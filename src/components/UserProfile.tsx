import Image from "next/image";
import styles from "./UserProfile.module.css";
import { ChevronRight, LogOut } from "lucide-react";

type Props = {
  src: string;
  userName: string;
  showMyProfile: string;
  favorites: string;
  settings: string;
  logout: string;
};

const UserProfile = ({ src, userName,showMyProfile, favorites,settings, logout }: Props) => {
  return (
    <>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <Image src={src} fill alt="profile"></Image>
        </div>

        <div className={styles.usernameWrapper}>
          <p className={styles.userName}>@{userName}</p>
        </div>
      </div>

      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>{showMyProfile}</p>
          <ChevronRight />
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>{favorites}</p>
          <ChevronRight />
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>{settings}</p>
          <ChevronRight />
        </div>
        <div className={styles.line}></div>
      </div>


      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>{logout}</p>
          <LogOut size={20}/>
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default UserProfile;
