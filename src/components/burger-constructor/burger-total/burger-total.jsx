import styles from "./burger-total.module.scss";
import {
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const BurgerTotal = (props) => {
    const { constrIngredients, bun } = useSelector(
        (state) => state.сonstructor
    );

    const totalPrice = useMemo(() => {
        const ingradientsPrice = constrIngredients.reduce(
            (sum, ingr) => sum + ingr.price,
            0
        );
        const bunPrice = bun ? bun.price * 2 : 0;

        return ingradientsPrice + bunPrice;
    }, [constrIngredients, bun]);

    return (
        <div className={`${styles.total} mt-10 mb-10`}>
            <div className={`${styles.total__price} mr-10`}>
                <span>{totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={props.onOrderReady}
                    extraClass={styles.order_button}
                >
                    Order
                </Button>
            </div>
        </div>
    );
};
export default React.memo(BurgerTotal);
