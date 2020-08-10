import React from "react";
import kedarkantha from "../Images/kedarkantha.jpg";
import { NavLink } from "react-bootstrap";

function Cards(props) {
  return (
    <div className="col">
      <div className="card card-width  ">
        <img src={props.imgsrc} class="card-img-top" alt="trekvista" />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <NavLink to="" className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Cards;
