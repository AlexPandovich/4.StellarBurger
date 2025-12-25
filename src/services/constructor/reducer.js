import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
