import styles from "./burger-constructor.module.scss";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import BurgerTotal from "./burger-total/burger-total";

const BurgerConstructor = (props) => {
    return (
        <section className={`${styles.constructor} pl-4 pr-4 `}>
            <BurgerConstructorList
                ingredients={props.ingredients}
                bunIndex={0}
            />

            <BurgerTotal />
        </section>
    );
};

export default BurgerConstructor;
