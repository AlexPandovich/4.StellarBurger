import styles from "./burger-container.module.scss";
import BurgerItem from "../burger-item/burger-item";

const BurgerContainer = (props) => {
    return (
        <div className={`${styles.burger__container} mt-6  mb-10 ml-4 mr-4`}>
            {props.items.map((item, id) => {
                let count = 0;
                if (id === 0 || id === 3) {
                    count = 2;
                } else {
                    count = 0;
                }
                return <BurgerItem key={item._id} item={item} count={count} />;
            })}
        </div>
    );
};

export default BurgerContainer;
