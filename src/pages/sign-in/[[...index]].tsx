import { SignIn } from "@clerk/nextjs";
import styles from "./sign-in.module.css";

export default function Page() {
  return (
    <SignIn
      path="/sign-in"
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
          formFieldLabel: styles.formFieldLabel,
          
        },
      }}
    />
  );
}
