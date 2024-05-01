import { ReactNode } from "react";
import styles from "@/components/AppShell.module.css";
import Nav from "@/components/Nav";
import { useRef } from "react";

type Props = {
  title: ReactNode;
  children: ReactNode[] | ReactNode;
};

const AppShell = ({ title, children }: Props) => {
  const divRef = useRef<HTMLInputElement>(null);

  const scrollToTop = () => {
    divRef?.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.parentWrapper}>
      <header className={styles.headerWrapper}>
        <div onClick={() => scrollToTop()}>{title}</div>
      </header>
      <main ref={divRef} className={styles.mainWrapper}>
        {children}
      </main>
      <nav className={styles.navWrapper}>  
        <Nav />
      </nav>
    </div>
  );
};

export default AppShell;
