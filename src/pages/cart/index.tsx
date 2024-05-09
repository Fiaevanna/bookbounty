import AppShell from "@/components/AppShell";
import PageTitle from "@/components/PageTitle";
import styles from "./cart.module.css";
import CartContent from "./CartContent";

const Cart = () => {
  return (
    <>
      <AppShell title={<PageTitle className={styles.title} text="CART" />}>
        <div className={styles.line}></div>
        <CartContent
          img={"/apart.webp"}
          title={"THINGS FALL APART"}
          author={"Chinua Achebe"}
          price={"50,00 KR"}
          sumTitle={"TOTAL SUM"}
          shipping={"Shipping 49,00 kr"}
          totalSum={"Total sum (inc.ship) 249,00 kr"}
        />
      
      
      </AppShell>

      
    </>
  );
};

export default Cart;
