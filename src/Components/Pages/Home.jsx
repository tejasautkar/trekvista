import React from "react";
import homelogo from "./homelogo.svg";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BodyBackgroundColor } from "react-body-backgroundcolor";

function Home({ history }) {
  const clickHandler = (e) => {
    e.preventDefault();
    history.push("/treks");
  };

  return (
    <div>
      <section
        id="header"
        className="align-items-center padding-top-100 floating  "
      >
        <div className="container">
          <div className="row ">
            <div className="col-6">
              <div className="jumbotron justify-content-center align-items-center">
                <h1 className="display-4">
                  Explore the Mountains with
                  <strong className="brand-name">TrekVista</strong>
                </h1>
                <hr className="my-4" />
                <p className="lead typewriter">Building a strong trekking community</p>

                <Button type="info" onClick={clickHandler}>
                  Explore Treks
                </Button>
              </div>
            </div>
            <div className="col-6 text-center">
              <div className="justify-content-center align-items-center ">
                <img src={homelogo} alt="" className="svg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
