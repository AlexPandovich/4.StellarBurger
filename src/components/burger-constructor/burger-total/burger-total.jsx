import styles from "./burger-total.module.scss";
import {
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const BurgerTotal = (props) => {
    return (
        <div className={`${styles.total} mt-10 mb-10`}>
            <div className={`${styles.total__price} mr-10`}>
                <span>{props.totalPrice}</span>
                <CurrencyIcon type="primary" />
            </div>
            <div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="medium"
                    onClick={props.onOrderReady}
                    extraClass={`${styles.order_button} ${
                        props.disabled ? styles.order_button__disabled : ""
                    }`}
                >
                    Order
                </Button>
            </div>
        </div>
    );
};
export default React.memo(BurgerTotal);
