import StarRating from "@/components/StarRating";
import styles from "./SellLayout.module.css";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/router";

const SellLayout = () => {
  const router = useRouter()
  const [messsage, setMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    bookCover: "",
    price: 0,
    releaseYear: 0,
    authorName: "",
    bookDescription: "",
    userDescription: "",
    ratingScore: 0,
  });

  // Här skickar jag iväg booken för uppladning i mitt api med fetch och skickar användaren till explore-books om allt går bra
  const handleOnSubmit = async () => {
    const res = await fetch("/api/books", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      setMessage("Something went wrong");
    }
    
    router.push("/explore-books")
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  /*
    De tre funktionerna nedan är till för bookCover för att fil uppladning kräver en input med type="file",
    så jag har en input med type="file" som är gömd, när man klickar på knappen så klickas det automatisk på input fältet
    sen så väljer användren en bild och då triggas onChange på input fältet som tar bilden, konverterar till base64 och sen lägger till i form Data
  */

  // Konvertera bild till base64
  const convertBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // On change för det gömmda input fältet med type="file"
  const handleOnBookCoverUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e?.currentTarget?.files && e?.currentTarget?.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      if (typeof base64 === "string") {
        const withoutPrefix = base64.split("data:image/png;base64,")[1];
        setFormData((prev) => ({ ...prev, bookCover: withoutPrefix }));
      }
    }
  };

  // Knappen som synns och som automatisk klickar på det gömmda input fältet
  const handleOnUploadButtonClick = () => {
    const hiddenInputElement = document.getElementById("bookCoverUpload");
    hiddenInputElement?.click();
  };

  return (
    <>
      <div className={styles.parent}>
        <p className={styles.infoDescription}>
          Fill out your personal description of the book and the book's
          condition below.
        </p>
        <textarea
          className={styles.description}
          onChange={(e) => handleChange("userDescription", e.target.value)}
        ></textarea>

        <div className={styles.ratingParent}>
          <p className={styles.rating}>My book rating:</p>
          <StarRating
            onRatingChange={(rating) => handleChange("ratingScore", rating)}
          />
          <div className={styles.line}></div>
        </div>

        <div className={styles.titleWrapper}>
          <p className={styles.title}>Book title:</p>
          <InputField
            type="text"
            onChange={(e) => handleChange("title", e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.btnContainer}>
          <Button
            className={styles.btn}
            text={"Upload book cover"}
            onClick={() => handleOnUploadButtonClick()}
          ></Button>
        </div>
        <InputField
          id="bookCoverUpload"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => handleOnBookCoverUpload(e)}
        />

        <div className={styles.releaseYearWrapper}>
          <p className={styles.releaseYear}>Release year:</p>
          <InputField
            type="number"
            className={styles.input}
            onChange={(e) =>
              handleChange("releaseYear", Number(e.target.value))
            }
          />
        </div>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>Price:</p>
          <InputField
            type="number"
            className={styles.input}
            onChange={(e) => handleChange("price", Number(e.target.value))}
          />
        </div>

        <div className={styles.authorWrapper}>
          <p className={styles.author}>Author:</p>
          <InputField
            onChange={(e) => handleChange("authorName", e.target.value)}
            type="text"
            className={styles.input}
          />
        </div>
        <div className={styles.bookDescriptionWrapper}>
          <p className={styles.bookDescription}>Book description:</p>
          <textarea
            onChange={(e) => handleChange("bookDescription", e.target.value)}
            className={styles.description}
          ></textarea>
        </div>
        <div className={styles.bookContentWrapper}></div>
      </div>

      <Button text="UPLOAD" onClick={() => handleOnSubmit()} className={styles.homePBtn}></Button>
    </>
  );
};

export default SellLayout;

/*   discription   Här vill du sen sätta någon funktion på inputfältets 
 value till this.value.toUpperCase() */

/* se till att stjärnorna sätts och sparas  */
