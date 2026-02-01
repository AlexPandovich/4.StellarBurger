import styles from "./LoginPage.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
const LoginPage = () => {
    return (
        <div className={`${styles.login}`}>
            <h2 className={styles.login__header}>Log in</h2>
            <input type="text" className={`${styles.login__input} mt-6 `} />
            <input type="text" className={`${styles.login__input} mt-6 `} />
            <Button
                htmlType="button"
                type="primary"
                size="medium"
                extraClass={`${styles.login__button}`}
            >
                Log in
            </Button>
            <div className={`${styles.register__block} mt-20`}>
                New user? <a href="/register">Register</a>
            </div>
            <div className={`${styles.restore__block} mt-4 mb-30`}>
                Forget password? <a href="/restore"> Restore</a>
            </div>
        </div>
    );
};

export default LoginPage;
