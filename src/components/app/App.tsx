import React from "react";
import "./App.css";
import AppHeader from "../app-header/AppHeader";
import BurgerConstructor from "components/burget-constructor/BurgerConstructor";

class App extends React.Component {
    render() {
        return (
            <>
                <AppHeader />
                <main className="main-content">
                    <div className="container">
                        <BurgerConstructor />
                    </div>
                </main>
            </>
        );
    }
}

export default App;
