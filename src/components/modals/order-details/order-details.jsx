import withModal from "../hocs/modal/with-modal";
import styles from "./order-details.module.scss";
import orderReadyImg from "../../../images/done.png";

const OrderDetails = ({ item }) => {
    return (
        <section className={`${styles.order} pt-8 pb-30 pl-25 pr-25`}>
            <div className={styles.order__number}>034536</div>

            <h2 className={`${styles.order__header} pt-8`}>order number</h2>

            <img
                src={orderReadyImg}
                alt=""
                className={` ${styles.order__img} pt-15`}
            />

            <div className={`${styles.order__status} pt-15`}>
                We’ve started preparing your order
            </div>
            <div className={`${styles.order__substatus} pt-2`}>
                Please wait until your order is ready at the orbital station.
            </div>
        </section>
    );
};

const OrderDetailsModal = withModal(OrderDetails);

export default OrderDetailsModal;
