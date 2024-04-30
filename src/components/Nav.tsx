import styles from "@/components/Nav.module.css";
import { CirclePlus, Home, Settings, ShoppingBasket } from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.parentWrapper}>
        <div className={styles.icons}>
          <div className={styles.navbtn}>
            <Home size={20} />
            <p>Home</p>
          </div>
          <div className={styles.navbtn}>
            <CirclePlus size={20} />
            <p>Sell</p>
          </div>

          <div className={styles.navbtn}>
            <ShoppingBasket size={20} />
            <p>Cart</p>
          </div>

          <div className={styles.navbtn}>
            <Settings size={20}/>
            <p>Profile</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
