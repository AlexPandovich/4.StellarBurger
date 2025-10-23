import styles from "./burger-total.module.scss";
import {
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerTotal = (props) => {
    return (
        <div className={`${styles.total} mt-10 mb-10`}>
            <div className={`${styles.total__price} mr-10`}>
                <span>610</span>
                <CurrencyIcon type="primary" />
            </div>
            <Button
                htmlType="button"
                type="primary"
                size="medium"
                extraClass={styles.order_button}
            >
                Order
            </Button>
        </div>
    );
};
export default BurgerTotal;
