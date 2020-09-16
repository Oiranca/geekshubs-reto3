import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./componets/main/Main";
import Boards from "./componets/boards/Boards";
import Products from "./pages/Products";
import Reports from "./pages/Reports";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/boardsMain" component={Boards} exact/>
                    <Route path="/" component={Main} exact/>
                    <Route path="/products" component={Products}/>
                    <Route path="/reports" component={Reports}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
