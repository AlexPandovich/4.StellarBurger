import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "services/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const store = createStore({
    preloadedState: {
        constructor: {
            bun: null,
            constrIngredients: [],
        },
        ingredients: {
            ingredients: [],
            ingredientsRequest: false,
        },
    },
});

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    // some changes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
