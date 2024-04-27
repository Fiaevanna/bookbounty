import PageTitle from "@/components/PageTitle";
import styles from "@/styles/ExploreBooks.module.css";
import AppShell from "@/components/AppShell";
import Image from "next/image";
const ExploreBooks = () => {
  return (
    <>
      <AppShell
        title={<PageTitle className={styles.title} text="EXPLORE BOOKS" />}
      >
        <div className={styles.img}>
          <Image
            src="/explorebookspage.png"
            fill
            alt="munks reading books"
          ></Image>
        </div>
      </AppShell>
    </>
  );
};

export default ExploreBooks;

/* 




 

*/
