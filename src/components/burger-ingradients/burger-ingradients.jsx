import React from "react";

import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingradients.module.scss";
import BurgerItem from "./burger-item/burger-item";
import BurgerContainer from "./buger-container/burger-container";

const BurgerIngradients = (props) => {
    const [current, setCurrent] = React.useState("one");

    const grouped = props.ingredients.reduce((acc, item) => {
        acc[item.type] = acc[item.type] || [];
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <section className={`${styles.ingradients} pt-10`}>
            <h1 className={styles.ingradients__header}>Build your burger</h1>
            <div className={`${styles.tab_wrapper} mt-4`}>
                <Tab
                    value="one"
                    active={current === "one"}
                    onClick={setCurrent}
                >
                    Buns
                </Tab>
                <Tab
                    value="two"
                    active={current === "two"}
                    onClick={setCurrent}
                >
                    Sauces
                </Tab>
                <Tab
                    value="three"
                    active={current === "three"}
                    onClick={setCurrent}
                >
                    Mains
                </Tab>
            </div>

            <div className={`${styles.categories} pt-10`}>
                <div className={`${styles.category} `}>
                    <h2 className={`${styles.category__header}`}>Buns</h2>
                    <BurgerContainer items={grouped.bun} />
                </div>

                <div className={`${styles.category}`}>
                    <h2 className={`${styles.category__header}`}>Sauces</h2>
                    <BurgerContainer items={grouped.sauce} />
                </div>

                <div className={`${styles.category}`}>
                    <h2 className={`${styles.category__header}`}>Mains</h2>
                    <BurgerContainer items={grouped.main} />
                </div>
            </div>
        </section>
    );
};

export default BurgerIngradients;
