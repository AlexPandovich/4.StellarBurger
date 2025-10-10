import React from "react";

import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngradients.module.scss";

import craterBunImg from "images/ingradients/bun-02.png";
import fluorescentBunImg from "images/ingradients/bun-01.png";

import sauceSpicyXImg from "images/ingradients/sauce-02.png";
import sauceSpaceImg from "images/ingradients/sauce-04.png";
import sauceCheeseImg from "images/ingradients/sauce-03.png";
import sauceSpicyImg from "images/ingradients/sauce-01.png";

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
        return (
            <section className={`${styles.ingradients} pt-10`}>
                <h1 className={styles.ingradients__header}>
                    Build your burger
                </h1>
                <div className={`${styles.tab_wrapper} mt-4`}>
                    <Tab
                        value=""
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
                        Three
                    </Tab>
                </div>

                <div className={`${styles.categories} pt-10`}>
                    <div className={`${styles.category} `}>
                        <h2 className={`${styles.category__header}`}>Buns</h2>

                        <div
                            className={`${styles.item__wrapper} mt-6 mb-10 ml-4 mr-4`}
                        >
                            <div className={styles.item}>
                                <img
                                    src={craterBunImg}
                                    alt=""
                                    className={styles.item__img}
                                />
                                <div className={`${styles.item__price} mt-2`}>
                                    <span>20</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <div
                                    className={`${styles.item__description} mt-2`}
                                >
                                    Crater Bun N-200i
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src={fluorescentBunImg}
                                    alt=""
                                    className={styles.item__img}
                                />
                                <div className={`${styles.item__price} mt-2`}>
                                    <span>20</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <div
                                    className={`${styles.item__description} mt-2`}
                                >
                                    Fluorescent Bun R2-D3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.category}`}>
                        <h2 className={`${styles.category__header}`}>Sauces</h2>

                        <div
                            className={`${styles.item__wrapper} mt-6  mb-10 ml-4 mr-4`}
                        >
                            <div className="item">
                                <img
                                    src={sauceSpicyXImg}
                                    alt=""
                                    className={styles.item__img}
                                />
                                <div className={`${styles.item__price} mt-2`}>
                                    <span>30</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <div
                                    className={`${styles.item__description} mt-2`}
                                >
                                    Sauce Spicy-X
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src={sauceSpaceImg}
                                    alt=""
                                    className={styles.item__img}
                                />
                                <div className={`${styles.item__price} mt-2`}>
                                    <span>30</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <div
                                    className={`${styles.item__description} mt-2`}
                                >
                                    Signature Space Sauce
                                </div>
                            </div>
                            <div className="item">
                                <img
                                    src={sauceSpicyImg}
                                    alt=""
                                    className={styles.item__img}
                                />
                                <div className={`${styles.item__price} mt-2`}>
                                    <span>30</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <div
                                    className={`${styles.item__description} mt-2`}
                                >
                                    Spicy Sauce
                                </div>
                            </div>

                            <div className="item">
                                <img
                                    src={sauceCheeseImg}
                                    alt=""
                                    className={styles.item__img}
                                />
                                <div className={`${styles.item__price} mt-2`}>
                                    <span>30</span>
                                    <CurrencyIcon type="primary" />
                                </div>
                                <div
                                    className={`${styles.item__description} mt-2`}
                                >
                                    Cheese Sauce
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BurgerIngradients;
