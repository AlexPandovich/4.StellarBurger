import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "./actions";

const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,
};

const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.ingredientsRequest = true;
                state.ingredientsFailed = false;
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.ingredientsRequest = false;
                state.ingredients = action.payload;
            })
            .addCase(fetchIngredients.rejected, (state) => {
                state.ingredientsRequest = false;
                state.ingredientsFailed = true;
            });
    },
});

export default ingredientsSlice.reducer;
