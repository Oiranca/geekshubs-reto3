import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./components/main/Main";
import Boards from "./components/boards/Boards";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/boardsMain" component={Boards} exact/>
          <Route path="/" component={Main} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
