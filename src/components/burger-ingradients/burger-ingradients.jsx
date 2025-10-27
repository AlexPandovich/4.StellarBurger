import React from "react";

import styles from "./burger-ingradients.module.scss";

import BurgerCategory from "./burger-category/burger-category";
import BurgerTabs from "./burger-tabs/burger-tabs";

const BurgerIngradients = (props) => {
    const [activeTab, setActiveTab] = React.useState("bun");

    const onTabClick = React.useCallback((activeTab) => {
        setActiveTab(activeTab);
        const element = document.getElementById(activeTab);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const grouped = React.useMemo(() => {
        return props.ingredients.reduce((acc, item) => {
            acc[item.type] = acc[item.type] || [];
            acc[item.type].push(item);
            return acc;
        }, {});
    }, [props]);

    return (
        <section className={`${styles.ingradients} pt-10`}>
            <h1 className={styles.ingradients__header}>Build your burger</h1>

            <BurgerTabs current={activeTab} onClick={onTabClick} />

            <section className={`${styles.categories} pt-10`}>
                <BurgerCategory id="bun" items={grouped.bun}>
                    Buns
                </BurgerCategory>
                <BurgerCategory id="sauce" items={grouped.sauce}>
                    Sauces
                </BurgerCategory>
                <BurgerCategory id="main" items={grouped.main}>
                    Mains
                </BurgerCategory>
            </section>
        </section>
    );
};

export default React.memo(BurgerIngradients);
