import React from "react";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingradients.module.scss";

import BurgerCategory from "./burger-category/burger-category";

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
            <section className={`${styles.tab_wrapper} mt-4`}>
                <Tab
                    value="bun"
                    active={current === "bun"}
                    onClick={setCurrent}
                >
                    Buns
                </Tab>
                <Tab
                    value="sauce"
                    active={current === "sauce"}
                    onClick={setCurrent}
                >
                    Sauces
                </Tab>
                <Tab
                    value="main"
                    active={current === "main"}
                    onClick={setCurrent}
                >
                    Mains
                </Tab>
            </section>

            <section className={`${styles.categories} pt-10`}>
                <BurgerCategory items={grouped.bun}>Buns</BurgerCategory>
                <BurgerCategory items={grouped.sauce}>Sauces</BurgerCategory>
                <BurgerCategory items={grouped.main}>Mains</BurgerCategory>
            </section>
        </section>
    );
};

export default BurgerIngradients;
