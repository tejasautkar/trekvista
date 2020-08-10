import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "../node_modules/bootstrap/dist/js/bootstrap.esm";

import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Routenav from "./Routenav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routenav />
    </div>
  );
}

export default App;
