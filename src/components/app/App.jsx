import "./App.scss";
import AppHeader from "../app-header/AppHeader";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "services/ingredients/actions";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "components/pages/MainPage";
import {
    IngredientDetails,
    IngredientDetailsModal,
} from "components/modals/ingredient-details/ingredient-details";
import { addIngredient } from "services/constructor/reducer";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIngredients());
    }, [dispatch]);

    const location = useLocation();
    let state = location.state;
    let navigate = useNavigate();

    const onAddIngredient = React.useCallback((e, item) => {
        e.preventDefault();
        dispatch(addIngredient(item));
        if (state?.backgroundLocation) navigate(-1);
        else navigate("/");
    }, []);

    return (
        <>
            <AppHeader />
            <Routes location={state?.backgroundLocation || location}>
                <Route path="/" element={<MainPage />}></Route>
                <Route
                    path="/ingredients/:id"
                    element={
                        <IngredientDetails onAddIngredient={onAddIngredient} />
                    }
                ></Route>
            </Routes>

            {state?.backgroundLocation && (
                <Routes>
                    <Route
                        path="/ingredients/:id"
                        element={
                            <IngredientDetailsModal
                                onClose={() => navigate(-1)}
                                onAddIngredient={onAddIngredient}
                            />
                        }
                    />
                </Routes>
            )}
        </>
    );
};

export default App;
