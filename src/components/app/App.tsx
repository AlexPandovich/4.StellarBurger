import React from "react";
import "./App.scss";
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "components/burger-constructor/BurgerConstructor";
import BurgerIngradients from "components/burger-ingradients/BurgerIngradients";

class App extends React.Component {
    render() {
        return (
            <>
                <AppHeader />
                <div className="container">
                    <main className="main-content">
                        <BurgerIngradients />
                        <BurgerConstructor />
                    </main>
                </div>
            </>
        );
    }
}

export default App;
