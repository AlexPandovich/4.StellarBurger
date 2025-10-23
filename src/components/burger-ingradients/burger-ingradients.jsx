import React from "react";

import styles from "./burger-ingradients.module.scss";

import BurgerCategory from "./burger-category/burger-category";
import BurgerTabs from "./burger-tabs/burger-tabs";

const BurgerIngradients = (props) => {
    const [current, setCurrent] = React.useState("bun");

    const grouped = props.ingredients.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <section className={`${styles.ingradients} pt-10`}>
            <h1 className={styles.ingradients__header}>Build your burger</h1>

            <BurgerTabs current={current} onClick={setCurrent} />

            <section className={`${styles.categories} pt-10`}>
                <BurgerCategory items={grouped.bun}>Buns</BurgerCategory>
                <BurgerCategory items={grouped.sauce}>Sauces</BurgerCategory>
                <BurgerCategory items={grouped.main}>Mains</BurgerCategory>
            </section>
        </section>
    );
};

export default BurgerIngradients;
