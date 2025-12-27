import styles from "./empty-constructor-element.module.scss";

const EmptyConstructorElement = (props) => {
    return (
        <div
            className={`constructor-element
            ${styles.empty_element}
            ${props.type === "top" ? "constructor-element_pos_top" : ""}
            ${props.type === "bottom" ? "constructor-element_pos_bottom" : ""}
            `}
        >
            {props.children}
        </div>
    );
};

export default EmptyConstructorElement;
