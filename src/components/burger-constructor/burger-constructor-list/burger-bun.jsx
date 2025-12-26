import styles from "./burger-constructor-list.module.scss";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDispatch } from "react-redux";
import { addIngredient } from "services/constructor/reducer";
import { useDrop } from "react-dnd";

const BurgerBun = (props) => {
    const dispatch = useDispatch();

    const [{ draggedItem }, dropTarget] = useDrop({
        accept: "ingredients",
        collect: (monitor) => ({
            draggedItem: monitor.getItem()?.item,
        }),
        drop(ingredient) {
            if (ingredient.item.type === "bun") {
                dispatch(addIngredient(ingredient.item));
            }
        },
    });

    const hoverStyle = `${
        draggedItem
            ? draggedItem.type === "bun"
                ? "outline__drop_area"
                : ""
            : ""
    }`;

    return (
        <div
            className={`${styles.constructor__item} ${styles.constructor__fixed_item} `}
        >
            {props.bun ? (
                <div ref={dropTarget} className={hoverStyle}>
                    <ConstructorElement
                        type={props.type}
                        isLocked={true}
                        text={props.bun.name_en + " (top)"}
                        price={props.bun.price}
                        thumbnail={props.bun.image_mobile}
                    />
                </div>
            ) : (
                <div
                    ref={dropTarget}
                    className={`${styles.drop_area__wrapper} ${hoverStyle}`}
                >
                    <EmptyConstructorElement type={props.type}>
                        Drag Bun
                    </EmptyConstructorElement>
                </div>
            )}
        </div>
    );
};

export default React.memo(BurgerBun);
