import { useDrag, useDrop } from "react-dnd";
import styles from "./burger-constructor-list.module.scss";
import {
    DragIcon,
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { moveIngredient } from "services/constructor/reducer";

const BurgerIngredient = ({ item, onRemoveIngredient }) => {
    const dispatch = useDispatch();

    const handleMoveIngredient = (dstKey, srcKey) => {
        dispatch(moveIngredient({ dstKey, srcKey }));
    };

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "CHANGE_INGREDIENT_ORDER",
        item: { ...item }, // data passed during drag
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, dropRef] = useDrop(() => ({
        accept: "CHANGE_INGREDIENT_ORDER",
        drop: (dragged) => {
            if (dragged.uniqueKey !== item.uniqueKey) {
                handleMoveIngredient(item.uniqueKey, dragged.uniqueKey);
            }
        },
    }));

    return (
        <li
            className={`${styles.constructor__item} `}
            ref={(node) => {
                dragRef(node);
                dropRef(node);
            }}
            style={{ opacity: isDragging ? 0.5 : 1 }}
        >
            <DragIcon type="primary" className="outline mr-6" />
            <ConstructorElement
                type={undefined}
                isLocked={false}
                text={item.name_en}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={(e) => onRemoveIngredient(e, item)}
            />
        </li>
    );
};

export default BurgerIngredient;
