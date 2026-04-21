import "./App.scss";
import AppHeader from "../app-header/AppHeader";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "services/ingredients/actions";
import { loginByRefreshToken } from "services/user/actions";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainPage from "components/pages/MainPage";
import LoginPage from "components/pages/LoginPage";
import {
  IngredientDetails,
  IngredientDetailsModal,
} from "components/modals/ingredient-details/ingredient-details";
import { addIngredient } from "services/constructor/reducer";
import RegisterPage from "components/pages/RegisterPage";
import ResetPasswordPage from "components/pages/ResetPasswordPage";
import ForgotPasswordPage from "components/pages/ForgotPassword";
import ProfilePage from "components/pages/profile-page/ProfilePage";
import { ProtectedRouteElement } from "components/ProtectedRouteElement";
import { GuestsRouteElement } from "components/GuestsRouteElements";
import { getCookie } from "services/cookies/cookies";
import ProfileOutlet from "components/pages/profile-page/ProfileOutlet";
import OrderHistoryOutlet from "components/pages/profile-page/OrderHistoryOutlet";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    const refreshToken = getCookie("refresh-token");
    console.log("refresh token ", refreshToken);
    dispatch(loginByRefreshToken(refreshToken));
  }, []);

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
          path="/login"
          element={<GuestsRouteElement element={<LoginPage />} />}
        ></Route>
        <Route
          path="/register"
          element={<GuestsRouteElement element={<RegisterPage />} />}
        ></Route>
        <Route
          path="/forgot-password"
          element={<GuestsRouteElement element={<ForgotPasswordPage />} />}
        ></Route>
        <Route
          path="/reset-password"
          element={<GuestsRouteElement element={<ResetPasswordPage />} />}
        ></Route>
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        >
          <Route index element={<ProfileOutlet />} />
          <Route path="order-history" element={<OrderHistoryOutlet />} />
        </Route>
        <Route
          path="/ingredients/:id"
          element={<IngredientDetails onAddIngredient={onAddIngredient} />}
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
