import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    bun: null,
    constrIngredients: [],
    ingredientsCount: {},
};

function addToIngredientsCountMap(countObj, ingredient) {
    const id = ingredient._id;
    if (ingredient.type === "bun") {
        countObj[id] = (countObj[id] || 0) + 2;
    } else {
        countObj[id] = (countObj[id] || 0) + 1;
    }
}

function deleteFromIngredientsCountMap(countObj, ingredient) {
    const id = ingredient._id;
    if (countObj.has(id)) {
        const current = countObj.get(id);
        if (ingredient.type === "bun") {
            delete countObj[id];
        } else if (current > 1) {
            countObj[id] = countObj[id] - 1;
        } else {
            delete countObj[id];
        }
    }
}

export const constructorSlice = createSlice({
    name: "constructor",
    initialState,
    reducers: {
        addIngredient: {
            reducer: (state, action) => {
                addToIngredientsCountMap(
                    state.ingredientsCount,
                    action.payload
                );

                if (action.payload.type === "bun") {
                    if (state.bun) {
                        deleteFromIngredientsCountMap(
                            state.ingredientsCount,
                            state.bun
                        );
                    }
                    state.bun = action.payload;
                } else {
                    state.constrIngredients.push(action.payload);
                }
            },
            prepare: (ingredient) => {
                return {
                    payload: {
                        ...ingredient,
                        uniqueKey: uuidv4(),
                    },
                };
            },
        },
        removeIngredient: (state, action) => {
            deleteFromIngredientsCountMap(
                state.ingredientsCount,
                action.payload
            );

            if (action.payload.type === "bun") {
                state.bun = null;
            } else {
                state.constrIngredients = state.constrIngredients.filter(
                    (item) => item.id !== action.payload.id
                );
            }
        },
    },
});

export const { addIngredient, removeIngredient } = constructorSlice.actions;
export default constructorSlice.reducer;
