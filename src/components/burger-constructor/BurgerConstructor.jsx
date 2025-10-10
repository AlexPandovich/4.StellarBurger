import React from "react";
import {
    DragIcon,
    ConstructorElement,
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import bunImage from "images/constructor/bun.png";
import sauceImage from "images/constructor/sauce.png";
import meatImage from "images/constructor/meat.png";
import spImage from "images/constructor/sp.png";
import mineralRingsImage from "images/constructor/mineral rings.png";

import styles from "./BurgerConstructor.module.scss";

class BurgerConstructor extends React.Component {
    render() {
        return (
            <div className={`${styles.constructor} pl-4 pr-4`}>
                <ul
                    role="list"
                    className={`${styles.constructor__list} pt-25 pl-4 pr-4`}
                >
                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Crater Bun N-200i (top)"
                            price={20}
                            thumbnail={bunImage}
                        />
                    </li>
                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            isLocked={false}
                            text="Sauce galactic traditional"
                            price={30}
                            thumbnail={sauceImage}
                        />
                    </li>
                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            isLocked={false}
                            text="The meat of the immortal mollusks Protostomia"
                            price={300}
                            thumbnail={meatImage}
                        />
                    </li>
                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            isLocked={false}
                            text="Fruits of the Fallenian tree"
                            price={80}
                            thumbnail={spImage}
                        />
                    </li>

                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            isLocked={false}
                            text="Crispy Mineral Rings"
                            price={80}
                            thumbnail={spImage}
                        />
                    </li>
                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            isLocked={false}
                            text="Crispy Mineral Rings"
                            price={80}
                            thumbnail={spImage}
                        />
                    </li>
                    <li className={`${styles.constructor__item} `}>
                        <DragIcon type="primary" className="outline mr-6" />
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Crater Bun N-200i (bottom)"
                            price={20}
                            thumbnail={bunImage}
                        />
                    </li>
                </ul>
                <div className={`${styles.total} mt-10 mb-10`}>
                    <div className={`${styles.total__price}`}>
                        <span>610</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button
                        htmlType="button"
                        type="primary"
                        size="medium"
                        extraClass={styles.button_width}
                    >
                        Order
                    </Button>
                </div>
            </div>
        );
    }
}

export default BurgerConstructor;
