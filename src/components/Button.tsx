import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import Link from "next/link";

type Props = {
  text: string;
  to?: string;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({ text, className, to, ...buttonProps }: Props) => {
  const rootButton = (
    <button className={`${styles.rootBtn} ${className}`} {...buttonProps}>
      {text}
    </button>
  );

  if (to) {
    return (
      <Link href={to} passHref legacyBehavior>
        {rootButton}
      </Link>
    );
  }

  return rootButton;
};

export default Button;

/* 

Här skapa jag en Button component som tar emot props som är typade, 
jag tar även emot inbyggda props för en Button, via componentPropsWithoutRef
för att enkelt kunna hantera events, klassnamn, styling, länkar osv

detta skapar jag för att enkelt hantera alla knappar på hela min sida på ett effektift sätt.


*/
