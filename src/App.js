import React from 'react';
import Header from "./componets/header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import './App.scss';
import Main from "./componets/main/Main";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={Main} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
