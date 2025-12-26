import React from "react";
import styles from "./burger-constructor-list.module.scss";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";

import { useDispatch } from "react-redux";
import { addIngredient, removeIngredient } from "services/constructor/reducer";
import { useDrop } from "react-dnd";
import BurgerIngredient from "./burger-ingredient";

const BurgerIngradientsList = (props) => {
    const constrIngredients = props.ingredients;
    const dispatch = useDispatch();

    const onRemoveIngredient = React.useCallback((e, item) => {
        dispatch(removeIngredient(item));
    }, []);

    const [{ draggedItem }, dropTarget] = useDrop({
        accept: "ingredients",
        collect: (monitor) => ({
            draggedItem: monitor.getItem()?.item,
        }),
        drop(ingredient) {
            if (ingredient.item.type !== "bun") {
                dispatch(addIngredient(ingredient.item));
            }
        },
    });

    const hoverStyle = `${
        draggedItem
            ? draggedItem.type !== "bun"
                ? "outline__drop_area"
                : ""
            : ""
    }`;

    return (
        <>
            {!constrIngredients || constrIngredients.length === 0 ? (
                <div
                    className={`${styles.constructor__item} ${styles.constructor__fixed_item} ${hoverStyle} m-4 `}
                    ref={dropTarget}
                >
                    <EmptyConstructorElement>
                        Drag Ingredients{" "}
                    </EmptyConstructorElement>
                </div>
            ) : (
                <ul
                    className={`${styles.constructor__list} m-4 pl-4 pr-4 ${hoverStyle}`}
                    ref={dropTarget}
                >
                    {constrIngredients.map((item) => {
                        if (item.type !== "bun") {
                            return (
                                <BurgerIngredient
                                    key={item.uniqueKey}
                                    item={item}
                                    onRemoveIngredient={onRemoveIngredient}
                                />
                            );
                        }
                    })}
                </ul>
            )}
        </>
    );
};

export default React.memo(BurgerIngradientsList);
