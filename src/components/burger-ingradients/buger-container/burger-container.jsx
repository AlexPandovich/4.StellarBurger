import styles from "./burger-container.module.scss";
import BurgerItem from "../burger-item/burger-item";
import { useState } from "react";
import IngradientDetailsModal from "components/modals/ingradient-details/ingradient-details";
import React from "react";
const BurgerContainer = (props) => {
    const [detailedItem, setDetailedItem] = useState(null);

    const onClose = React.useCallback((e) => {
        setDetailedItem(null);
    }, []);

    const onItemClick = React.useCallback((e, item) => {
        setDetailedItem(item);
    }, []);

    return (
        <>
            <div
                className={`${styles.burger__container} mt-6  mb-10 ml-4 mr-4`}
            >
                {props.items.map((item, id) => {
                    let count = 0;
                    if (id === 0 || id === 3) {
                        count = 2;
                    } else {
                        count = 0;
                    }
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
                <IngradientDetailsModal onClose={onClose} item={detailedItem} />
            )}
        </>
    );
};

export default React.memo(BurgerContainer);
