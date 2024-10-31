import styles from "./ErrorMessage.module.css";

interface IProps{
    message: string | undefined

}

const ErrorMessage: React.FC<IProps> = ({ message }) => {
    return (
        message ? <p className={styles.errorMessage}>{message}</p>: null
    )
}

export default ErrorMessage;
