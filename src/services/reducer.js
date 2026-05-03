import { combineReducers } from "redux";
import constructorReducer from "./constructor/reducer";
import ingredientsReducer from "./ingredients/reducer";
import userReducer from "./user/reducer";

export const rootReducer = combineReducers({
  сonstructor: constructorReducer,
  ingredients: ingredientsReducer,
  user: userReducer,
});
