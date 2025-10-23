import {
    DragIcon,
    ConstructorElement,
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.scss";

const BurgerConstructor = (props) => {
    const top = props.ingredients[0];

    return (
        <div className={`${styles.constructor} pl-4 pr-4 `}>
            <div
                key={top._id}
                className={`${styles.constructor__item} ml-15 mr-6`}
            >
                {/* <DragIcon type="primary" className="outline mr-6" /> */}
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={top.name_en + " (top)"}
                    price={top.price}
                    thumbnail={top.image_mobile}
                />
            </div>

            <ul className={`${styles.constructor__list} m-4 pl-4 pr-4`}>
                {props.ingredients.map((item, index) => {
                    let type;
                    let locked = false;
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
                                    type={type}
                                    isLocked={locked}
                                    text={item.name_en}
                                    price={item.price}
                                    thumbnail={item.image_mobile}
                                />
                            </li>
                        );
                    }
                    return <></>;
                })}
            </ul>
            <div
                key={top._id}
                className={`${styles.constructor__item} ml-15 mr-6`}
            >
                {/* <DragIcon type="primary" className="outline mr-6" /> */}
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={top.name_en + " (bottom)"}
                    price={top.price}
                    thumbnail={top.image_mobile}
                />
            </div>

            <div className={`${styles.total} mt-10 mb-10`}>
                <div className={`${styles.total__price}`}>
                    <span>610</span>
                    <CurrencyIcon type="primary" />
                </div>
                <Button
                    htmlType="button"
                    type="primary"
                    size="medium"
                    extraClass={styles.button_width}
                >
                    Order
                </Button>
            </div>
        </div>
    );
};

export default BurgerConstructor;
