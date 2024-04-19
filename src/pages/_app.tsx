import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Balthazar } from "next/font/google";
import { Adamina } from "next/font/google";
import { Libre_Bodoni } from "next/font/google";
const balthazar = Balthazar({ subsets: ["latin"], weight: ["400"] });
const adamina = Adamina({ subsets: ["latin"], weight: ["400"] });
const libreB = Libre_Bodoni({ subsets: ["latin"], weight: ["400"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --special-font: ${balthazar.style.fontFamily}; 
          --welcome-font: ${adamina.style.fontFamily}; 
          --primary-font: ${balthazar.style.fontFamily};
          --btn-font: ${libreB.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
