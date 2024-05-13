import styles from "./Menu.module.css";
import { ChevronRight, LogOut } from "lucide-react";

const Menu = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>Show my profile</p>
          <ChevronRight />
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>Favorites</p>
          <ChevronRight />
        </div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.parent}>
        <div className={styles.menuMyProfile}>
          <p className={styles.text}>Settings</p>
          <ChevronRight />
        </div>
        <div className={styles.line}></div>
      </div>

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
