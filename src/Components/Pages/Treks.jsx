import React from "react";
import TData from "../TData";
import Cards from "../Cards";
function Treks() {
  return (
    <div>
      <div className=" container">
        <h1 className="text-center my-5 animation-fadein">Explore Treks</h1>
      </div>
      
      <div className="container justify-content">
        <div className="row row-col-1 row-col-md-3 row-col-lg-3 justify-content-space-between gy-5 animation-fadein">
          {TData.map((val, ind) => {
            return <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Treks;
