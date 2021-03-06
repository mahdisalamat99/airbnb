import React from "react";
import "./App.css";
import Main from "./pages/Main/Main";
import HostYourHome from "./pages/Host-your-home/Host-your-home";
import Terms from "./pages/Terms/Terms";
import SiteMap from "./pages/Site-map/Site-map";
import LayoutBottom from "./pages/Main/Layout-bottom/Layout-bottom";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'


function App() {
  return (
        <div>
      <Router>
      <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/host' component={HostYourHome} />
      <Route path='/terms' component={Terms}/>
      <Route path='/site-map' component={SiteMap}/>
      </Switch>
      <LayoutBottom/>
      </Router>
        </div>

  );
}

export default App;
