/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Notfound from "./components/Notfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
