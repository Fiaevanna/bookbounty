import { ReactNode } from "react";
import styles from "@/components/AppShell.module.css";
import Nav from "@/components/Nav";
type Props = {
  title: ReactNode;
  children: ReactNode[] | ReactNode;
};

const AppShell = ({ title, children }: Props) => {
  return (
    <div className={styles.parentWrapper}>
      <header className={styles.headerWrapper}>{title}</header>
      <main className={styles.mainWrapper}>{children}</main>
      <nav className={styles.navWrapper}>
        <Nav />
      </nav>
    </div>
  );
};

export default AppShell;
