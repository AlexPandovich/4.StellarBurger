import React from "react";

import { useSelector } from "react-redux";
import BurgerBun from "./burger-bun";
import BurgerIngradientsList from "./burger-ingredients-list";

const BurgerConstructorList = () => {
    const { constrIngredients, bun } = useSelector(
        (state) => state.сonstructor
    );

    return (
        <>
            <BurgerBun bun={bun} type="top" />
            <BurgerIngradientsList ingredients={constrIngredients} />
            <BurgerBun bun={bun} type="bottom" />
        </>
    );
};

export default React.memo(BurgerConstructorList);
