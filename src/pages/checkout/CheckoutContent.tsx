import styles from "./CheckoutContent.module.css";

type Props = {
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
};

const CheckoutContent = ({
firstName,
lastName,
  address,
  postalCode,
  city,
  country,
}: Props) => {
  return (
    <div className={styles.parent}>
      <div className={styles.contentWrapper}>
       <div className={styles.fullNameWrapper}>
       <p>{firstName}</p>
        <p>{lastName}</p>
       </div>
       <p>{address}</p>
       <div className={styles.address}>
        <p>{postalCode}</p>
        <p>{city}</p>
       </div>
        
        <p>{country}</p>
      </div>
    </div>
  );
};

export default CheckoutContent;
