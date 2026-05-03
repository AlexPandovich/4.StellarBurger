import styles from "./Restore.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
const ForgotPasswordPage = () => {
  return (
    <div className={`${styles.restore}`}>
      <h2 className={styles.restore__header}>Restore password</h2>
      <input
        type="text"
        placeholder="Password"
        className={`${styles.restore__input} mt-6 `}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`${styles.restore__button}`}
      >
        Restore
      </Button>
      <div className={`${styles.login__block} mt-20`}>
        Remembered the password? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
