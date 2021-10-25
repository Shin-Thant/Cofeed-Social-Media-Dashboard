import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Accessories from "./components/Accessories";

const App = (props) => {
    return (
        <div className="app-container">
            <Nav />
            <div className="content-container">
                <Main />
                <Accessories />
            </div>
        </div>
    );
};

export default App;
