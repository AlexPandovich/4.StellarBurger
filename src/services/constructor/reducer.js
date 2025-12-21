import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "./actions";

const initialState = {
    bun: null,
    constrIngredients: [],
    ingredientsCount: new Map(),
};

function addToIngredientsCountMap(countMap, ingredient) {
    const id = ingredient._id;
    if (ingredient.type === "bun") {
        countMap.set(id, (countMap.get(id) || 0) + 2);
    } else {
        countMap.set(id, (countMap.get(id) || 0) + 1);
    }
}

function deleteFromIngredientsCountMap(countMap, ingredient) {
    const id = ingredient._id;
    if (countMap.has(id)) {
        const current = countMap.get(id);
        if (ingredient.type === "bun") {
            countMap.delete(id);
        } else if (current > 1) {
            countMap.set(id, current - 1);
        } else {
            countMap.delete(id);
        }
    }
}

export const constructorReducer = (state = initialState, action) => {
    const newCountMap = new Map(state.ingredientsCount);
    switch (action.type) {
        case ADD_INGREDIENT:
            addToIngredientsCountMap(newCountMap, action.payload);

            if (action.payload.type === "bun") {
                if (state.bun) {
                    deleteFromIngredientsCountMap(newCountMap, state.bun);
                }
                return {
                    ...state,
                    bun: action.payload,
                    ingredientsCount: newCountMap,
                };
            } else {
                return {
                    ...state,
                    constrIngredients: [
                        ...state.constrIngredients,
                        action.payload,
                    ],
                    ingredientsCount: newCountMap,
                };
            }

        case REMOVE_INGREDIENT:
            deleteFromIngredientsCountMap(newCountMap, action.payload);

            if (action.payload.type === "bun") {
                return {
                    ...state,
                    bun: null,
                    ingredientsCount: newCountMap,
                };
            } else {
                return {
                    ...state,
                    constrIngredients:
                        state.constructor.constrIngredients.filter(
                            (item) => item.id !== action.payload.id
                        ),
                    ingredientsCount: newCountMap,
                };
            }

        default:
            return state;
    }
};
