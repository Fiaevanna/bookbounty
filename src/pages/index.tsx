import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log("Props", props);

  return (
    <>
      <Head>
        <title>Book Bounty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/landingpage.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.landingPageContainerOne}>
          <div className={styles.headerTextContainer}>
            <div className={styles.welcome}>
              <p>Welcome to</p>
            </div>
            <div className={styles.headerText}>
              <p>Book Bounty</p>
            </div>
          </div>
          <img
            className={styles.img}
            src="/landingpage.png"
            alt=" painting of girl reading book"
          />
          <div className={styles.imgCtaContent}>
            <div className={styles.cta}>
              <p>A modern twist</p>
              <p>Vintage treasures</p>
              <p>Explore unique finds</p>
            </div>
          </div>
        </div>
        <div className={styles.footerTextContent}>
          <article className={styles.footerTextContainer}>
            <p className={styles.footerText}>
              A modern twist on secondhand shopping.
            </p>
            <p className={styles.footerText}>
              Dive into a world of vintage treasures.
            </p>
            <p className={styles.footerText}>
              Get started quickly and explore unique finds now.
            </p>

            <div className={styles.btnContainer}>
              <Button
                to="/login"
                text="GET STARTED"
                className={styles.homePBtn}
              />
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

/*
Kör denna funktionen först men enbart på servern 


     <h1>{props.resultFromAPI.listOfThings.map((thing) => `${thing} - `)}</h1>

export const getServerSideProps = () => {
  console.log("This happens only on the server");

  const resultFromAPI = { listOfThings: [1, 2, 3, 4] };

  return {
    props: { resultFromAPI },
  };
};
 */
