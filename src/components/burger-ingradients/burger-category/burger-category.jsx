import BurgerContainer from "../buger-container/burger-container";
import styles from "./burger-category.module.scss";
import React from "react";

const BurgerCategory = ({ id, items, children, headerRef }) => {
    return (
        <div className={`${styles.category} `}>
            <h2
                id={id}
                ref={headerRef}
                className={`${styles.category__header}`}
            >
                {children}
            </h2>
            <BurgerContainer items={items} />
        </div>
    );
};
export default React.memo(BurgerCategory);
