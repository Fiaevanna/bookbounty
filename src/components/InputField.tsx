import styles from "@/components/InputField.module.css";
import { Search } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  rightIcon?: ReactNode;
};

const InputField = ({ rightIcon }: Props) => {
  return (
    <div className={styles.parentWrapper}>
      <input placeholder="Search..." className={styles.searchBar} type="text" />
      <div className={styles.rightIcon}>{rightIcon}</div>
    </div>
  );
};

export default InputField;
