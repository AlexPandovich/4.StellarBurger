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

    const onOrderDetailsShow = React.useCallback(() => {
        setShowOrderReady(true);
    }, []);

    return (
        <>
            <section className={`${styles.constructor} pl-4 pr-4 `}>
                <BurgerConstructorList />
                <BurgerTotal onOrderReady={onOrderDetailsShow} />
            </section>
            {orderReady && <OrderDetailsModal onClose={onOrderDetailsClose} />}
        </>
    );
};

export default React.memo(BurgerConstructor);
