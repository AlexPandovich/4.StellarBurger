import styles from "./burger-item.module.scss";
import {
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { useDrag } from "react-dnd";

const BurgerItem = (props) => {
    const item = props.item;

    const [{ opacity }, ref] = useDrag({
        type: "ingredients",
        item: { item },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.3 : 1,
        }),
    });

    return (
        <div
            className={styles.item}
            onClick={(e) => props.onClick(e, item)}
            ref={ref}
            style={{ opacity }}
        >
            <img src={item.image} alt="" className={styles.item__img} />
            <div className={`${styles.item__price} mt-2`}>
                <span>{item.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div className={`${styles.item__description} mt-2`}>
                {item.name_en}
            </div>
            {props.count > 0 && <Counter count={props.count} size="default" />}
        </div>
    );
};

export default React.memo(BurgerItem);
