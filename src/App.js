import React from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import HostYourHome from "./pages/Host-your-home/Host-your-home";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <div>
      <Route exact path='/' component={Main} />
      <Route exact path='/host' component={HostYourHome} />
    </div>
      </Switch>
      </Router>
  );
}

export default App;
