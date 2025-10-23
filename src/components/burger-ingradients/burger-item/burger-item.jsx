import styles from "./burger-item.module.scss";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerItem = (props) => {
    const item = props.item;
    return (
        <div key={item._id} className={styles.item}>
            <img src={item.image} alt="" className={styles.item__img} />
            <div className={`${styles.item__price} mt-2`}>
                <span>{item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={`${styles.item__description} mt-2`}>
                {item.name_en}
            </div>
        </div>
    );
};

export default BurgerItem;
