const EmptyConstructorElement = (props) => {
    return (
        <div
            className={`constructor-element 
            ${props.type === "top" ? "constructor-element_pos_top" : ""}
            ${props.type === "bottom" ? "constructor-element_pos_bottom" : ""}
            `}
        ></div>
    );
};

export default EmptyConstructorElement;
