import React, {useState} from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className="container-fluid">
      <div className="navigation">
 <div className="text-center" onClick={() => setHidden(!hidden)} >
        <img
          src="./logo.png"
          alt="wood-working"
          className="logo"
          width="140px"
          height="100px"
         
        ></img>
        <h2 className="company-title " >NazWood Millworks</h2> 
      </div>
      </div>
     

<ul id="nav" className={hidden === true ? `overlay ` : `hidden`}>
  <div className="overlay-inner text-center">
  <div className="">
<li class="nav-link">
		<a data-name="Our Work" className="nav-text" href="#work" onClick={() => setHidden(!hidden)}>Our work</a>
	</li>
  </div>
	
  <div className="">
<li class="nav-link">
<a data-name="About Us" className="nav-text" href="#about" onClick={() => setHidden(!hidden)}>About Us</a>
	</li>
  </div>
	<div className="">
<li class="nav-link">
<a data-name="Reviews" className="nav-text" href="#reviews" onClick={() => setHidden(!hidden)}>Reviews</a>
	</li>
  </div>
	<div className="">
<li class="nav-link">
		<a data-name="Contact Us" className="nav-text" href="#contact" onClick={() => setHidden(!hidden)}>Contact Us</a>
	</li>
  </div></div>
</ul>

    </div>
  );
};
