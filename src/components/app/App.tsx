import React from "react";
import "./App.scss";
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "components/burger-constructor/burger-constructor";
import BurgerIngradients from "components/burger-ingradients/burger-ingradients";
import { ingredients } from "utils/data";

class App extends React.Component {
    render() {
        return (
            <>
                <AppHeader />
                <div className="container">
                    <main className="main-content">
                        <BurgerIngradients ingredients={ingredients} />
                        <BurgerConstructor ingredients={ingredients} />
                    </main>
                </div>
            </>
        );
    }
}

export default App;
