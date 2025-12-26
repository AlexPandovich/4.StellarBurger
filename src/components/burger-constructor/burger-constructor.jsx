import styles from "./burger-constructor.module.scss";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import BurgerTotal from "./burger-total/burger-total";
import { useState, useMemo, useCallback } from "react";
import OrderDetailsModal from "components/modals/order-details/order-details";
import React from "react";
import { useSelector } from "react-redux";

const BurgerConstructor = (props) => {
    const [orderReady, setShowOrderReady] = useState(false);
    const { constrIngredients, bun } = useSelector(
        (state) => state.сonstructor
    );

    const enoughComponents = useMemo(() => {
        if (bun && constrIngredients.length > 0) return true;
        return false;
    }, [constrIngredients, bun]);

    const onOrderDetailsClose = useCallback((e) => {
        setShowOrderReady(false);
    }, []);

    const onOrderDetailsShow = useCallback(() => {
        console.log(enoughComponents);
        if (enoughComponents) setShowOrderReady(true);
    }, [enoughComponents]);

    const totalPrice = useMemo(() => {
        const ingradientsPrice = constrIngredients.reduce(
            (sum, ingr) => sum + ingr.price,
            0
        );
        const bunPrice = bun ? bun.price * 2 : 0;

        return ingradientsPrice + bunPrice;
    }, [constrIngredients, bun]);

    return (
        <>
            <section className={`${styles.constructor} pl-4 pr-4 `}>
                <BurgerConstructorList />
                <BurgerTotal
                    onOrderReady={onOrderDetailsShow}
                    totalPrice={totalPrice}
                    disabled={!enoughComponents}
                />
            </section>
            {orderReady && <OrderDetailsModal onClose={onOrderDetailsClose} />}
        </>
    );
};

export default React.memo(BurgerConstructor);
