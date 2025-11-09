import React, { useRef } from "react";

import styles from "./burger-ingradients.module.scss";

import BurgerCategory from "./burger-category/burger-category";
import BurgerTabs from "./burger-tabs/burger-tabs";

export function handleScroll(e, refs, categories, setActiveTab) {
    const sectionPosition = e.target.getBoundingClientRect();

    const refsDistances = refs.map((ref) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return Infinity;
        const dx = rect.left - sectionPosition.left;
        const dy = rect.top - sectionPosition.top;
        return Math.sqrt(dx * dx + dy * dy);
    });

    const minIndex = refsDistances.reduce(
        (minIdx, currentDistance, currentIndex, array) =>
            currentDistance < array[minIdx] ? currentIndex : minIdx,
        0
    );

    setActiveTab(categories[minIndex]);
}

const BurgerIngradients = (props) => {
    const [activeTab, setActiveTab] = React.useState("bun");

    const headerBunRef = useRef(null);
    const headerSauceRef = useRef(null);
    const headerMainRef = useRef(null);

    const onScroll = (e) => {
        const refs = [headerBunRef, headerSauceRef, headerMainRef];
        const categories = ["bun", "sauce", "main"];

        handleScroll(e, refs, categories, setActiveTab);
    };

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

            <section
                onScroll={onScroll}
                className={`${styles.categories} pt-10`}
            >
                <BurgerCategory
                    headerRef={headerBunRef}
                    id="bun"
                    items={grouped.bun}
                >
                    Buns
                </BurgerCategory>
                <BurgerCategory
                    headerRef={headerSauceRef}
                    id="sauce"
                    items={grouped.sauce}
                >
                    Sauces
                </BurgerCategory>
                <BurgerCategory
                    headerRef={headerMainRef}
                    id="main"
                    items={grouped.main}
                >
                    Mains
                </BurgerCategory>
            </section>
        </section>
    );
};

export default React.memo(BurgerIngradients);
