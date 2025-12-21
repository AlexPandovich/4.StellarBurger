import styles from "./burger-container.module.scss";
import BurgerItem from "../burger-item/burger-item";
import { useState } from "react";
import IngradientDetailsModal from "components/modals/ingredient-details/ingredient-details";
import React from "react";
import { useDispatch } from "react-redux";
import { addIngredient } from "services/constructor/actions";
import { useSelector } from "react-redux";
const BurgerContainer = (props) => {
    const [detailedItem, setDetailedItem] = useState(null);
    const dispatcher = useDispatch();
    const { ingredientsCount } = useSelector((state) => state.сonstructor);

    const onClose = React.useCallback((e) => {
        setDetailedItem(null);
    }, []);

    const onItemClick = React.useCallback((e, item) => {
        setDetailedItem(item);
    }, []);

    const onAddIngredient = React.useCallback((e, item) => {
        e.preventDefault();
        dispatcher(addIngredient(item));
        onClose(e);
    }, []);

    return (
        <>
            <div
                className={`${styles.burger__container} mt-6  mb-10 ml-4 mr-4`}
            >
                {props.items.map((item) => {
                    const count = ingredientsCount.get(item._id) || 0;

                    return (
                        <BurgerItem
                            key={item._id}
                            item={item}
                            count={count}
                            onClick={onItemClick}
                        />
                    );
                })}
            </div>

            {detailedItem != null && (
                <IngradientDetailsModal
                    onClose={onClose}
                    item={detailedItem}
                    onAddIngredient={onAddIngredient}
                />
            )}
        </>
    );
};

export default React.memo(BurgerContainer);
