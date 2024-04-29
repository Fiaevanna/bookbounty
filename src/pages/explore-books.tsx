import PageTitle from "@/components/PageTitle";
import styles from "@/styles/ExploreBooks.module.css";
import AppShell from "@/components/AppShell";
import Image from "next/image";
import InputField from "@/components/InputField";
import { Heart, Search } from "lucide-react";
import BookLayout from "@/components/BookLayout";

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

        <InputField rightIcon={<Search className={styles.icon} size={15} />} />
        <div className={styles.wrapperBookTextContent}>
          <BookLayout
            imgsrc="/bok.png"
            userName="@Allen"
            price="50,00 KR"
            bookTitle="Things fall apart"
          />

          <Heart className={styles.heartAndUserNameWrapper} size={12} />
        </div>
      </AppShell>
    </>
  );
};

export default ExploreBooks;

/* 

const bookContent = ({imgsrc, userName, price, bookTitle}) =>{
// loopa igenom alla böcker och hämta bild,boknamn,pris och användarid username
och retunera propsen 
  return(
    <>
    
    
    </>
  )
}


 

*/
