import styles from "./burger-constructor.module.scss";
import BurgerConstructorList from "./burger-constructor-list/burger-constructor-list";
import BurgerTotal from "./burger-total/burger-total";
import { useState } from "react";
import OrderAcceptedModal from "components/modals/order-accepted/order-accepted";

const BurgerConstructor = (props) => {
    const [orderReady, setShowOrderReady] = useState(false);
    const onClose = (e) => {
        setShowOrderReady(false);
    };
    const onOrderReady = () => {
        setShowOrderReady(true);
    };
    return (
        <>
            <section className={`${styles.constructor} pl-4 pr-4 `}>
                <BurgerConstructorList
                    ingredients={props.ingredients}
                    bunIndex={0}
                    onOrderReady={onOrderReady}
                />

                <BurgerTotal onOrderReady={onOrderReady} />
            </section>
            {orderReady && <OrderAcceptedModal onClose={onClose} />}
        </>
    );
};

export default BurgerConstructor;
