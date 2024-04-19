import styles from "./Button.module.css"

type Props = {
    text: string;
    className?: string;
}

export const Button = ({text, className}:Props) => {
    return(
        <>
        <button className={`${styles.rootBtn} ${className}`}>{text}</button>
        </>
    )
}
 