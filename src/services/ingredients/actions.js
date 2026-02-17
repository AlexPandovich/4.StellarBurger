import { loadIngredientsRequest } from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await loadIngredientsRequest();
      //   if (!response.success) {
      //     return thunkAPI.rejectWithValue("Ошибка загрузки ингредиентов");
      //   }
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);
