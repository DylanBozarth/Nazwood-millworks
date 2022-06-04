import React from "react";
import{ WorkPopUp } from "../add-ons/workPopUp";
export const OurWork = () => {
  return (
    <div className="workPage container-fluid ">
        
        <h2 className="work-text see-text">Services we offer</h2>
        <div className="container-fluid">
        
       <WorkPopUp /></div>
       <div className=" wood-background">
    <h4 className="work-text see-text">
        {" "}
        We offer Walnut, White oak, Poplar, Alder, Cherry, Maple, Hickory <br /> 
          <b>Exotics available upon request</b>
      
      </h4></div>
    </div>
  );
};
