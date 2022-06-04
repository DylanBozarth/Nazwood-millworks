import React from "react";
import ".//workPopUp.scss";
import { Link } from "react-router-dom";
export const WorkPopUp = () => {
  return (
    <main className="page-content container-fluid">
      <div className="card kitchens">
        <h1 className="text-center card-title see-text">Cabinets</h1>
        <div className="content">
          <Link to="/cabinets"><button className="btn">View all our cabinet work</button></Link>
          <p className="copy">We offer <br />
           
              Face frame

              Euro

              Multi-family

              Entertainment centers

              Closets

              Garage

              Vanities

              Custom Furniture
            
          </p>

        </div>
      </div>
      <div className="card trim"><h1 className="text-center card-title see-text">Trim, Boards, and Moulding</h1>
        <div className="content">
        <Link to="/trim"><button className="btn">View trims </button></Link>
          <p className="copy"> We offer <br />
            Crown
            Shiplap

            Tongue & Groove

            Custom Flooring

            Face Frame stock

            S4S</p>
          
        </div>
      </div>
      <div className="card moulding"><h1 className="text-center card-title see-text">Kitchen counters</h1>
        <div className="content">
         <Link to="/kitchens"><button className="btn">View all our moulding work</button></Link>
          <p className="copy">Crown

            Base

            Case

            Trim Packages

            Custom Profiles

            Historic Reproductions

            Arches

            Stair Parts</p>
         
        </div>
      </div>
      <div className="card stairs"><h1 className="text-center card-title see-text">Other work</h1>
        <div className="content">
         <Link to="/misc"><button className="btn">See Wood work</button></Link>
          <p className="copy">We offer <br />
            I don't know what to put here</p>
         
        </div>
      </div>
    </main>
  )
}

