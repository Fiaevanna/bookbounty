import { SignIn } from "@clerk/nextjs";
import styles from "./sign-in.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
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
      <div className={styles.link}>
        <span className={styles.span}>Don’t have an account?</span>

        <span>
          <Link className={styles.linkText} href="/sign-up">
            Sign up
          </Link>
        </span>
      </div>
    </>
  );
}
