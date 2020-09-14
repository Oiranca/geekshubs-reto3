import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./componets/main/Main";
import Boards from "./componets/boards/Boards";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Main} exact/>
                    <Route path="/boardsMain" component={Boards} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
