import React, { Fragment } from "react";
import homelogo from "./homelogo.svg";

import { Button } from "react-bootstrap";

function Home({ history }) {
  const clickHandler = (e) => {
    e.preventDefault();
    history.push("/treks");
  };

  return (
    <Fragment>
      <div
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

                <p className="lead typewriter container">
                 Mountains are calling
                </p>
              </div>

           
            </div>
            <div className="col-6 text-center">
              <div className="justify-content-center align-items-center ">
                <img src={homelogo} alt="" className="svg" />
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-6">
            
                <Button type="info" onClick={clickHandler}>
                  Explore Treks
                </Button>
              
            </div>
            <hr my-2></hr>
          </div>
        </div>
      </div>
      <div></div>
    </Fragment>
  );
}

export default Home;
