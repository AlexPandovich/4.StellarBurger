import { burgerIngredients } from "../utils/data";

export const getIngredientsRequest = async () => {
    return await new Promise((resolve) =>
        setTimeout(() => {
            resolve({
                success: true,
                data: burgerIngredients,
            });
        }, 1500)
    );
};
