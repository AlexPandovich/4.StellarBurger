import { rootReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const createStore = (initialState) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });

    return store;
};
