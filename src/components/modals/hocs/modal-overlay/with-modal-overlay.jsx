import styles from "./with-modal-overlay.module.scss";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modals");

const withModalOverlay = (WrappedComponent) => (props) => {
    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={props.onClose}>
            <WrappedComponent {...props} />
        </div>,
        modalRoot
    );
};

export default withModalOverlay;
