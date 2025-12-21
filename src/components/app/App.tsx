import React from "react";
import "./App.scss";
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import BurgerIngredients from "components/burger-ingredients/burger-ingredients";

class App extends React.Component {
    render() {
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
    }
}

export default App;
