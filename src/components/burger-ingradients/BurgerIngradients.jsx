import React from "react";

import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngradients.module.scss";

class BurgerIngradients extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current: "one" };
        this.setCurrent = this.setCurrent.bind(this);
    }

    setCurrent(cur) {
        this.setState({
            current: cur,
        });
    }

    render() {
        const grouped = this.props.ingredients.reduce((acc, item) => {
            acc[item.type] = acc[item.type] || [];
            acc[item.type].push(item);
            return acc;
        }, {});

        return (
            <section className={`${styles.ingradients} pt-10`}>
                <h1 className={styles.ingradients__header}>
                    Build your burger
                </h1>
                <div className={`${styles.tab_wrapper} mt-4`}>
                    <Tab
                        value="one"
                        active={this.state.current === "one"}
                        onClick={this.setCurrent}
                    >
                        Buns
                    </Tab>
                    <Tab
                        value="two"
                        active={this.state.current === "two"}
                        onClick={this.setCurrent}
                    >
                        Sauces
                    </Tab>
                    <Tab
                        value="three"
                        active={this.state.current === "three"}
                        onClick={this.setCurrent}
                    >
                        Mains
                    </Tab>
                </div>

                <div className={`${styles.categories} pt-10`}>
                    <div className={`${styles.category} `}>
                        <h2 className={`${styles.category__header}`}>Buns</h2>

                        <div
                            className={`${styles.item__wrapper} mt-6 mb-10 ml-4 mr-4`}
                        >
                            {grouped.bun.map((item) => (
                                <div key={item._id} className={styles.item}>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className={styles.item__img}
                                    />
                                    <div
                                        className={`${styles.item__price} mt-2`}
                                    >
                                        <span>{item.price}</span>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <div
                                        className={`${styles.item__description} mt-2`}
                                    >
                                        {item.name_en}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.category}`}>
                        <h2 className={`${styles.category__header}`}>Sauces</h2>

                        <div
                            className={`${styles.item__wrapper} mt-6  mb-10 ml-4 mr-4`}
                        >
                            {grouped.sauce.map((item) => (
                                <div key={item._id} className={styles.item}>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className={styles.item__img}
                                    />
                                    <div
                                        className={`${styles.item__price} mt-2`}
                                    >
                                        <span>{item.price}</span>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <div
                                        className={`${styles.item__description} mt-2`}
                                    >
                                        {item.name_en}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.category}`}>
                        <h2 className={`${styles.category__header}`}>Mains</h2>

                        <div
                            className={`${styles.item__wrapper} mt-6  mb-10 ml-4 mr-4`}
                        >
                            {grouped.main.map((item) => (
                                <div key={item._id} className={styles.item}>
                                    <img
                                        src={item.image}
                                        alt=""
                                        className={styles.item__img}
                                    />
                                    <div
                                        className={`${styles.item__price} mt-2`}
                                    >
                                        <span>{item.price}</span>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                    <div
                                        className={`${styles.item__description} mt-2`}
                                    >
                                        {item.name_en}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BurgerIngradients;
