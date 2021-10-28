import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/bootstrap.css";
import "./assets/css/style.css";
import "./assets/css/fonts.css";

import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-me.html" component={AboutMe} />
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/contacts.html" component={Contacts} />
    </Switch>
  );
}

export default App;
