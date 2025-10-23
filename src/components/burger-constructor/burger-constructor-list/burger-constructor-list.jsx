import styles from "./burger-constructor-list.module.scss";
import {
    DragIcon,
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorList = (props) => {
    const fixedBun = props.ingredients[props.bunIndex];

    return (
        <>
            <div
                className={`${styles.constructor__item} ${styles.constructor__fixed_item} `}
            >
                {/* <DragIcon type="primary" className="outline mr-6" /> */}
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={fixedBun.name_en + " (top)"}
                    price={fixedBun.price}
                    thumbnail={fixedBun.image_mobile}
                />
            </div>

            <ul className={`${styles.constructor__list} m-4 pl-4 pr-4`}>
                {props.ingredients.map((item, index) => {
                    if (item.type !== "bun") {
                        return (
                            <li
                                key={item._id}
                                className={`${styles.constructor__item} `}
                            >
                                <DragIcon
                                    type="primary"
                                    className="outline mr-6"
                                />
                                <ConstructorElement
                                    type={undefined}
                                    isLocked={false}
                                    text={item.name_en}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                />
                            </li>
                        );
                    }
                })}
            </ul>

            <div
                className={`${styles.constructor__item} ${styles.constructor__fixed_item} `}
            >
                {/* <DragIcon type="primary" className="outline mr-6" /> */}
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={fixedBun.name_en + " (bottom)"}
                    price={fixedBun.price}
                    thumbnail={fixedBun.image_mobile}
                />
            </div>
        </>
    );
};

export default BurgerConstructorList;
