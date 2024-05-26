import { Button } from "@/components/Button";
import InputField from "@/components/InputField";
import styles from "@/styles/shipmentDetails.module.css";
import { useUser } from '@clerk/clerk-react';
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";
import { useState } from "react";
import { useRouter } from 'next/router'
/* Här ska logik in för att spara all info från input till settings/profilen  */

const ShipmentDetails = () => {
  const router = useRouter()
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    postalCode: "",
    city: "",
    country: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage("");
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /* skickar in data till api endpoint  */
  const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMessage("");
    const response = await fetch("http://localhost:3000/api/shipment-details", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (!response.ok) {
      const message = data?.message || `Something went wrong!`;
      setMessage(message);
      return;
    }

    /* skicka vidare användare till explore books  */
    
    await router.push('/explore-books');
  };

  console.log(formData);
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
                    value={formData.fullName}
                    onChange={handleChange}
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
                    value={formData.address}
                    onChange={handleChange}
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
                    value={formData.postalCode}
                    onChange={handleChange}
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
                    value={formData.city}
                    onChange={handleChange}
                  />

                  <div className={styles.formFieldLabelRow}>
                    <label htmlFor="country" className={styles.labelText}>
                      Country
                    </label>
                  </div>
                  <InputField
                    className={styles.inputField}
                    type="text"
                    name="country"
                    maxLength={15}
                    value={formData.country}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className={styles.errorWrapper}>
                    <p className={styles.message}>{message}</p>
                  </div>
                  <div>
                    <Button
                      text="CREATE ACCOUNT"
                      className={styles.shipDetailsBtn}
                      type="submit"
                      onClick={submit}
                      /* när jag klickar på knappen så vill jag skicka min form data till till endpointen */
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
    getAuth(req).sessionClaims?.metadata?.onboardingComplete === true;

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
