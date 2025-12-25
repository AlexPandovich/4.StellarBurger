import { rootReducer } from "./reducer";
import { enableMapSet } from "immer";
import { configureStore } from "@reduxjs/toolkit";

enableMapSet();

export const createStore = (initialState) => {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });

    return store;
};
