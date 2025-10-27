import styles from "./burger-constructor.module.scss";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import BurgerTotal from "./burger-total/burger-total";
import { useState } from "react";
import OrderDetailsModal from "components/modals/order-details/order-details";
import React from "react";

const BurgerConstructor = (props) => {
    const [orderReady, setShowOrderReady] = useState(false);

    const onOrderDetailsClose = React.useCallback((e) => {
        setShowOrderReady(false);
    }, []);

    const onOrderReady = React.useCallback(() => {
        setShowOrderReady(true);
    }, []);

    return (
        <>
            <section className={`${styles.constructor} pl-4 pr-4 `}>
                <BurgerConstructorList
                    ingredients={props.ingredients}
                    bunIndex={0}
                />

                <BurgerTotal onOrderReady={onOrderReady} />
            </section>
            {orderReady && <OrderDetailsModal onClose={onOrderDetailsClose} />}
        </>
    );
};

export default React.memo(BurgerConstructor);
