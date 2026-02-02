import styles from "./RegisterPage.module.scss";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
const RegisterPage = () => {
    return (
        <div className={`${styles.register}`}>
            <h2 className={styles.register__header}>Register</h2>
            <input
                type="text"
                placeholder="Name"
                className={`${styles.register__input} mt-6 `}
            />
            <input
                type="text"
                placeholder="E-mail"
                className={`${styles.register__input} mt-6 `}
            />
            <input
                type="text"
                placeholder="Password"
                className={`${styles.register__input} mt-6 `}
            />
            <Button
                htmlType="button"
                type="primary"
                size="medium"
                extraClass={`${styles.register__button}`}
            >
                Register
            </Button>

            <div className={`${styles.login__block} mt-4 mb-30`}>
                Already registered? <a href="/login"> Login</a>
            </div>
        </div>
    );
};

export default RegisterPage;
