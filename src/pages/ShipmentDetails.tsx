import { Button } from "@/components/Button";
import styles from "@/styles/ShipmentDetails.module.css";

const ShipmentDetails = () => {
  return (
    <>
      <div className={styles.shipmentCard}>
        <div className={styles.shipmentContainer}>
          <div className={styles.formCardContainer}>
            <div className={styles.headerText}>
              <p>SHIPMENT DETAILS</p>
            </div>
            <div className={styles.main}>
              <div className={styles.form}>
                <form>
                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="address" className={styles.labelText}>Address</label>
                  </div>
                  <input
                    className={styles.inputField}
                    type="text"
                    name="address"
                    maxLength={15}
                  />
                </form>
                <form>
                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="postalCode" className={styles.labelText}>Postal code</label>
                  </div>
                  <input
                    className={styles.inputField}
                    type="text"
                    name="postalCode"
                    maxLength={5}
                  />
                </form>
                <form>
                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="city" className={styles.labelText}>City</label>
                  </div>
                  <input
                    className={styles.inputField}
                    type="text"
                    name="city"
                    maxLength={15}
                  />
                </form>
                <form>
                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="phone" className={styles.labelText}>Phone</label>
                  </div>
                  <input
                    className={styles.inputField}
                    type="number"
                    name="phone"
                    maxLength={10}
                  />
                </form>
              <div>  <Button
                  to="/sign-in"
                  text="CREATE ACCOUNT"
                  className={styles.shipDetailsBtn}
                /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentDetails;

/*  <div className={styles.shipmentContainer}>
      <p className={styles.headerText}>SHIPMENT DETAILS</p>
      <div className={styles.form}>
        
      </div>
     
    </div> */