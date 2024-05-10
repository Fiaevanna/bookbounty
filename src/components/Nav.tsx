import styles from "@/components/Nav.module.css";
import { CirclePlus, Home, Settings, ShoppingBasket } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.parentWrapper}>
        <div className={styles.icons}>
          <Link className={styles.link} href="/explore-books">
            <div className={styles.navbtn}>
              <Home size={20} />
              <p>Home</p>
            </div>
          </Link>

          <Link className={styles.link} href="/sell">
            <div className={styles.navbtn}>
              <CirclePlus size={20} />
              <p>Sell</p>
            </div>
          </Link>

          <Link className={styles.link} href="/cart">
            <div className={styles.navbtn}> 
              <ShoppingBasket size={20} />
              <p>Cart</p>
            </div>
          </Link>

          <Link className={styles.link} href="/profile">
            <div className={styles.navbtn}>
              <Settings size={20} />
              <p>Profile</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
