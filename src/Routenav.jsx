import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Treks from "./Components/Pages/Treks";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

import Contact from "./Components/Pages/Contact";


function Routenav() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/treks" component={Treks} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routenav;
