import { SignUp } from "@clerk/nextjs";
import styles from "./sign-up.module.css";

export default function Page() {
  return (
    <SignUp
      path="/sign-up"
      appearance={{
        elements: {
          formButtonPrimary: styles.formButtonPrimary,
          card: styles.card,
          cardBox: styles.cardBox,
          footer: styles.footer,
          rootBox: styles.rootBox,
          headerTitle: styles.headerTitle,
          buttonArrowIcon: styles.buttonArrowIcon,
          formFieldInput: styles.formFieldInput,
          
        },
      }}
    />
  );
}


