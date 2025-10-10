import React from "react";
import {
    DragIcon,
    ConstructorElement,
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./BurgerConstructor.module.scss";

class BurgerConstructor extends React.Component {
    render() {
        console.log(this.props.ingredients);
        return (
            <div className={`${styles.constructor} pl-4 pr-4`}>
                <ul
                    role="list"
                    className={`${styles.constructor__list} pt-25 pl-4 pr-4`}
                >
                    {this.props.ingredients.map((item, index, array) => {
                        let type;
                        let locked = false;
                        if (index === 0) {
                            type = "top";
                            locked = true;
                        } else if (index === array.length - 1) {
                            type = "bottom";
                            locked = true;
                        }

                        return (
                            <li
                                key={item._id}
                                className={`${styles.constructor__item} `}
                            >
                                <DragIcon
                                    type="primary"
                                    className="outline mr-6"
                                />
                                <ConstructorElement
                                    type={type}
                                    isLocked={locked}
                                    text={item.name_en}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                />
                            </li>
                        );
                    })}
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
