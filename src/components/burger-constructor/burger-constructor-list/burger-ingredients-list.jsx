import React from "react";
import styles from "./burger-constructor-list.module.scss";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import {
    DragIcon,
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngradientsList = (props) => {
    const constrIngredients = props.ingredients;

    return (
        <>
            {!constrIngredients || constrIngredients.length === 0 ? (
                <div
                    className={`${styles.constructor__item} ${styles.constructor__fixed_item} m-4`}
                >
                    <EmptyConstructorElement>
                        Drag Ingredients{" "}
                    </EmptyConstructorElement>
                </div>
            ) : (
                <ul className={`${styles.constructor__list} m-4 pl-4 pr-4`}>
                    {constrIngredients.map((item) => {
                        if (item.type !== "bun") {
                            return (
                                <li
                                    // key={item.uniqueKey}
                                    className={`${styles.constructor__item} `}
                                >
                                    <DragIcon
                                        type="primary"
                                        className="outline mr-6"
                                    />
                                    <ConstructorElement
                                        type={undefined}
                                        isLocked={false}
                                        text={item.name_en}
                                        price={item.price}
                                        thumbnail={item.image_mobile}
                                    />
                                </li>
                            );
                        }
                    })}
                </ul>
            )}
        </>
    );
};

export default React.memo(BurgerIngradientsList);
