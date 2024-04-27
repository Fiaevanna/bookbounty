import { ComponentPropsWithoutRef } from "react";
import styles from "./PageTitle.module.css";
type Props = {
    text: string;
} & ComponentPropsWithoutRef<"p">


const PageTitle = ({text, className }: Props) => {
    return(
        <p className={`${styles.pageTitle}  ${className}`}>{text}</p>
    )
}

export default PageTitle;