import styles from "./burger-container.module.scss";
import BurgerItem from "../burger-item/burger-item";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const BurgerContainer = (props) => {
    const { ingredientsCount } = useSelector((state) => state.сonstructor);

    let location = useLocation();

    return (
        <>
            <div
                className={`${styles.burger__container} mt-6  mb-10 ml-4 mr-4`}
            >
                {props.items &&
                    props.items.map((item) => {
                        const count = ingredientsCount[item._id] || 0;

                        return (
                            <Link
                                key={item._id}
                                to={`/ingredients/${item._id}`}
                                state={{ backgroundLocation: location }}
                            >
                                <BurgerItem
                                    key={item._id}
                                    item={item}
                                    count={count}
                                />
                            </Link>
                        );
                    })}
            </div>
        </>
    );
};

export default React.memo(BurgerContainer);
