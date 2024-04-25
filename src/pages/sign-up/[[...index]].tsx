import { SignUp } from "@clerk/nextjs";
import styles from "./sign-up.module.css";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function Page() {
  return (
    <div className={styles.shipmentCard}>
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
            formFieldLabel: styles.formFieldLabel,
          },
        }}
      />

      <div className={styles.BtnLink}>
        <div className={styles.link}>
          <span className={styles.span}>Already have an account?</span>

          <span>
            <Link className={styles.linkText} href="/sign-in">
              Sign in
            </Link>
          </span>
        </div>

      </div>
    </div>
  );
}
