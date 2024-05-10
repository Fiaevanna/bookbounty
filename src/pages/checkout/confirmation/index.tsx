import AppShell from "@/components/AppShell";
import styles from "./Confirmation.module.css";
import PageTitle from "@/components/PageTitle";
import CheckoutContent from "../CheckoutContent";
import Button from "@/components/Button";

const Confirmation = () => {
  return (
    <AppShell
      title={<PageTitle className={styles.title} text="CONFIRMATION" />}
    >
      <div className={styles.parent}>
        <div className={styles.text}>
          <p>THE PARCEL IS NOW ON ITS WAY TO YOU</p>
          <p>THANKS FOR RECYCLING! </p>
          <p className={styles.earth}>🌏</p>
          <div className={styles.line}></div>
        </div>
        <div>
          <CheckoutContent
            firstName="Joakim"
            lastName="Allen"
            postalCode="174 52"
            address={"Råstensgatan 5"}
            city={"Sundbyberg"}
            country={"Sverige"}
          />
          <p>
            You will receive a notification on your phone when the parcel is
            ready for pickup!
          </p>
        </div>
        <Button
          to="/explore-books"
          text="BACK TO  HOME"
          className={styles.btn}
        >
          BACK TO PAGE
        </Button>
      </div>
    </AppShell>
  );
};

export default Confirmation;
