import styles from "./burger-constructor-list.module.scss";
import EmptyConstructorElement from "../empty-constructor-element/empty-constructor-element";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";

const BurgerBun = (props) => {
    
    return (
        <div
            className={`${styles.constructor__item} ${styles.constructor__fixed_item} `}
        >
            {props.bun ? (
                <ConstructorElement
                    type={props.type}
                    isLocked={true}
                    text={props.bun.name_en + " (top)"}
                    price={props.bun.price}
                    thumbnail={props.bun.image_mobile}
                />
            ) : (
                <EmptyConstructorElement type={props.type} />
            )}
        </div>
    );
};

export default React.memo(BurgerBun);
