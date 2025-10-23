import styles from "./burger-container.module.scss";
import BurgerItem from "../burger-item/burger-item";

const BurgerContainer = (props) => {
    return (
        <div className={`${styles.burger__container} mt-6  mb-10 ml-4 mr-4`}>
            {props.items.map((item) => (
                <BurgerItem item={item} />
            ))}
        </div>
    );
};

export default BurgerContainer;
