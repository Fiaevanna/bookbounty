import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import styles from "@/styles/shipmentDetails.module.css";
import { getAuth } from "@clerk/nextjs/server";

import { NextRequest } from "next/server";
/* Här ska logik in för att spara all info från input till settings/profilen  */

const ShipmentDetails = () => {
  return (
    <>
      <div className={styles.shipmentCard}>
        <div className={styles.shipmentContainer}>
          <div className={styles.formCardContainer}>
            <header className={styles.headerText}>
              <p>SHIPMENT DETAILS</p>
            </header>
            <main className={styles.main}>
              <div className={styles.form}>
                <form>
                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="fullName" className={styles.labelText}>
                      Full name
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="text"
                    name="fullName"
                    maxLength={15}
                  />

                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="address" className={styles.labelText}>
                      Address
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="text"
                    name="address"
                    maxLength={15}
                  />

                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="postalCode" className={styles.labelText}>
                      Postal code
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="text"
                    name="postalCode"
                    maxLength={5}
                  />

                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="city" className={styles.labelText}>
                      City
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="text"
                    name="city"
                    maxLength={15}
                  />

                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="country" className={styles.labelText}>
                      Country
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="text"
                    name="city"
                    maxLength={15}
                  />

                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="phone" className={styles.labelText}>
                      Phone
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="number"
                    name="phone"
                    maxLength={10}
                  />

                  <div>
                    <Button
                      to="/sign-in"
                      text="CREATE ACCOUNT"
                      className={styles.shipDetailsBtn}
                    />
                  </div>
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentDetails;

export const getServerSideProps = ({ req }: { req: NextRequest }) => {
  // Kollar om användare redan har gjort shipment-details (onboarding), om de har gjort det skicka de till explore books
  const onboardingIsCompleted =
    getAuth(req).sessionClaims?.metadata.onboardingComplete === true;
  if (onboardingIsCompleted) {
    return {
      redirect: {
        permanent: false,
        destination: "/explore-books",
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};
