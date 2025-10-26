import BurgerContainer from "../buger-container/burger-container";
import styles from "./burger-category.module.scss";

const BurgerCategory = (props) => {
    return (
        <div className={`${styles.category} `}>
            <h2 id={props.id} className={`${styles.category__header}`}>
                {props.children}
            </h2>
            <BurgerContainer items={props.items} />
        </div>
    );
};
export default BurgerCategory;
