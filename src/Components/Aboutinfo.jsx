import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Aboutinfo(props) {
  return (
    <ScrollAnimation animateIn="navanim">
      <div className="container-fluid navanim">
        <div className="row">
          <div className="col-4">
            <img
              className={`floatleft ${props.classprop}`}
              src={props.imgsrc}
              alt="accomodation"
            />
          </div>
          <div className="col-6 my-auto">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Aboutinfo;
