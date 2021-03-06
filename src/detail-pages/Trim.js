import React from "react";
import { Link } from "react-router-dom";

export const Trim = () => {
    return (
        <div className="container-fluid">
<h3 className="work-text" >Our Cabinet work</h3>
<Link to="/" className="work-text">Back to home page</Link>
            <div className="row">
                
                <div className="col-sm-4">
                    <img src="/hisphotos/trim/milling2.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/milling4.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/Moulding1.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/Moulding2.jfif" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/trim1.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/trim3.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/trimphoto.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                <div className="col-sm-4">
                    <img src="hisphotos/trim/woodcutouts.jpg" className="img-fluid work-photo" alt="work-trim" />
                </div>
                
                
            </div>
            <Link to="/" className="work-text">Back to home page</Link>

        </div>
    )
}