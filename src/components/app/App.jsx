import "./App.scss";
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import BurgerIngredients from "components/burger-ingredients/burger-ingredients";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "services/ingredients/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchIngredients());
    }, []);

    return (
        <>
            <AppHeader />
            <div className="container">
                <main className="main-content">
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </DndProvider>
                </main>
            </div>
        </>
    );
};

export default App;
