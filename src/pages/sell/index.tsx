import AppShell from "@/components/AppShell";
import Button from "@/components/Button";
import PageTitle from "@/components/PageTitle";
import styles from "./Sell.module.css";
import SellLayout from "./SellLayout";

const Sell = () => {
  return (
    <>
      <AppShell title={<PageTitle text="UPLOAD BOOK" />}>
        <SellLayout/>
        <Button to="" text="UPLOAD" className={styles.homePBtn}>
          ADD TO CART
        </Button>
      </AppShell>
    </>
  );
};

export default Sell;
