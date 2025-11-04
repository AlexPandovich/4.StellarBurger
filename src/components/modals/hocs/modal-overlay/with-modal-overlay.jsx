import styles from "./with-modal-overlay.module.scss";
import ReactDOM from "react-dom";
import { useEffect } from "react";
const modalRoot = document.getElementById("react-modals");

const withModalOverlay = (WrappedComponent) => (props) => {
    const { onClose } = props;

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") {
                props.onClose(e);
            }
        };

        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={props.onClose}>
            <WrappedComponent {...props} />
        </div>,
        modalRoot
    );
};

export default withModalOverlay;
