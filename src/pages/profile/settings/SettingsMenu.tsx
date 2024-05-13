import Button from "@/components/Button";
import styles from "./SettingsMenu.module.css";
import InputField from "@/components/InputField";
const SettingsMenu = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.btnWrapper}>
          <Button className={styles.btn} text=" + Profile pitcher">
            + Profile pitcher
          </Button>
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="phone">
            Change phone number:
          </label>
          <InputField className={styles.inputField} type="number" />
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="fullName">
            Full name:
          </label>
          <InputField className={styles.inputField} type="text" />
        </div>
       
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="address">
            Address:
          </label>
          <InputField className={styles.inputField} type="text" />
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="postalCode">
            Postal code:
          </label>
          <InputField className={styles.inputField} type="number" />
        </div>
      
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="city">
            City:
          </label>
          <InputField className={styles.inputField} type="text" />
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="country">
            Country:
          </label>
          <InputField className={styles.inputField} type="text" />
        </div>
        <div className={styles.labelWrapper}>
          <label className={styles.labelText} htmlFor="password">
            Password:
          </label>
          <InputField className={styles.inputField} type="text" />
        </div>
        <Button className={styles.btnUpdate} text="UPDATE">
          + Profile pitcher
        </Button>
      </div>
    </>
  );
};

export default SettingsMenu;

/* 



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
              
              
              */
