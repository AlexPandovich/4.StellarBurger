import { getIngredientsRequest } from "../../utils/fakeApi";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIngredients = createAsyncThunk(
    "ingredients/fetch",
    async (_, thunkAPI) => {
        try {
            const response = await getIngredientsRequest();
            if (!response.success) {
                return thunkAPI.rejectWithValue("Ошибка загрузки ингредиентов");
            }
            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
