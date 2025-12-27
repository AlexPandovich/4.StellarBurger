import withModal from "../hocs/modal/with-modal";
import styles from "./ingredient-details.module.scss";

const IngradientDetails = ({ item, onAddIngredient }) => {
    return (
        <div className={styles.ingradient}>
            <img src={item.image_large} alt="" />
            <h2 className={`${styles.ingradient__text} mt-4`}>
                {" "}
                {item.name_en}
            </h2>
            <div className={`${styles.ingradient__wrapper} mt-8`}>
                <div className={styles.ingradient_item}>
                    <h3 className={styles.ingradient__header}>
                        Calories, kcal
                    </h3>
                    <div className={styles.ingradient__value}>
                        {item.calories}
                    </div>
                </div>
                <div className={styles.ingradient_item}>
                    <h3 className={styles.ingradient__header}>Proteins, g</h3>
                    <div className={styles.ingradient__value}>
                        {item.proteins}
                    </div>
                </div>
                <div className={styles.ingradient_item}>
                    <h3 className={styles.ingradient__header}>Fats, g</h3>
                    <div className={styles.ingradient__value}>{item.fat}</div>
                </div>
                <div className={styles.ingradient_item}>
                    <h3 className={styles.ingradient__header}>
                        Carbohydrates, g
                    </h3>
                    <div className={styles.ingradient__value}>
                        {item.carbohydrates}
                    </div>
                </div>
            </div>
            <button
                className={styles.ingradient__button}
                onClick={(e) => onAddIngredient(e, item)}
            >
                Add ingradient
            </button>
        </div>
    );
};

const IngradientDetailsModal = withModal(IngradientDetails);

export default IngradientDetailsModal;
