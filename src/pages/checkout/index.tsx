import AppShell from "@/components/AppShell";
import styles from "./Checkout.module.css";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import { Pencil } from "lucide-react";
import Button from "@/components/Button";
import CheckoutContent from "./CheckoutContent";
import InputField from "@/components/InputField";

const Checkout = () => {
  return (
    <>
      <AppShell title={<PageTitle className={styles.title} text="CHECKOUT" />}>
        <div className={styles.checkoutParent}>
          <div className={styles.imgWrapper}>
            <Image
              className={styles.img}
              src={"/static/still.jpg"}
              fill
              alt=""
            ></Image>
          </div>

          <div className={styles.shippingWrapper}>
            <div className={styles.titleAndIcon}>
              <p className={styles.text}>SHIPPING PARCEL SENDS TO</p>
              <Pencil size={15} />
            </div>
            <div className={styles.line}></div>
            <CheckoutContent
              firstName="Joakim"
              lastName="Allen"
              postalCode="174 52"
              address={"Råstensgatan 5"}
              city={"Sundbyberg"}
              country={"Sverige"}
            />
            <div className={styles.titleAndIcon}>
              <p className={styles.text}>PAY WITH PHONE NUMBER</p>
              <Pencil size={15} />
            </div>
            <div className={styles.line}></div>
            <p className={styles.infoText}>
              Receive your order information and handle payments via your phone
              number.
            </p>

            <div className={styles.titleAndIcon}>
              <div className={styles.layoutForm}>
                <div className={styles.formFieldLabelRow}>
                  <label htmlFor="phone" className={styles.labelText}>
                    Mobile number
                  </label>
                </div>
                <InputField
                  className={styles.inputField}
                  value={"070 38 32 111"}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <Button to="/confirmation" text="PURCHASE" className={styles.homePBtn}>
          PURCHASE
        </Button>
      </AppShell>
    </>
  );
};

export default Checkout;
