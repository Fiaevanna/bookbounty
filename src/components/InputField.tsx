import styles from "@/components/InputField.module.css";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type Props = {
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<"input">;

const InputField = ({ rightIcon, className, ...inputProps }: Props) => {
  return (
    <div className={styles.parentWrapper}>
      <input
        className={`${styles.rootInputField} ${className}`}
        {...inputProps}
      />
      <div className={styles.rightIcon}>{rightIcon}</div>
    </div>
  );
};

export default InputField;
