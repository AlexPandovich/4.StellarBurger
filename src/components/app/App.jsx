import "./App.scss";
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import BurgerIngredients from "components/burger-ingredients/burger-ingredients";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getIngredients } from "services/ingredients/actions";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIngredients());
    }, []);

    return (
        <>
            <AppHeader />
            <div className="container">
                <main className="main-content">
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
            </div>
        </>
    );
};

export default App;
