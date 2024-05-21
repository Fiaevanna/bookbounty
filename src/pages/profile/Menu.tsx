import Link from "next/link";
import styles from "./Menu.module.css";
import { ChevronRight, LogOut } from "lucide-react";

const Menu = () => {
  return (
    <>
      <Link className={styles.link} href={"/profile/my-profile"}>
        <div className={styles.parent}>
          <div className={styles.menuMyProfile}>
            <p className={styles.text}>Show my profile</p>
            <ChevronRight />
          </div>
          <div className={styles.line}></div>
        </div>
      </Link>

      <Link className={styles.link} href={"/profile/favorites"}>
        <div className={styles.parent}>
          <div className={styles.menuMyProfile}>
            <p className={styles.text}>Favorites</p>
            <ChevronRight />
          </div>
          <div className={styles.line}></div>
        </div>
      </Link>

      <Link className={styles.link} href={"/profile/settings"}>
        <div className={styles.parent}>
          <div className={styles.menuMyProfile}>
            <p className={styles.text}>Settings</p>
            <ChevronRight />
          </div>
          <div className={styles.line}></div>
        </div>
      </Link>

      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>Logout</p>
          <LogOut size={20} />
        </div>
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default Menu;
