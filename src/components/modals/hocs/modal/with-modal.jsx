import styles from "./with-modal.module.scss";
import modalCrossImg from "../../../../images/modals/modal-cross.png";
import withModalOverlay from "../modal-overlay/with-modal-overlay";

const withModal = (WrappedComponent) => {
    const ModalWrapper = (props) => (
        <div
            className={`${styles.modal} p-10`}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={`${styles.modal__header} `}>
                <h2>{props.title}</h2>
                <img
                    className={styles.modal__cross}
                    src={modalCrossImg}
                    alt="cross"
                    onClick={props.onClose}
                />
            </div>
            <WrappedComponent {...props} />
        </div>
    );
    return withModalOverlay(ModalWrapper);
};

export default withModal;
