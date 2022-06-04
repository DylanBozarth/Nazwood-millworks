import React from "react";
import { AboutUs } from './components/aboutus';
import { Header } from './components/header';
import HeroImage from "./add-ons/hero-image";

import { OurWork } from './components/ourWork';
import { Reviews } from './components/reviews';
import { WoodTypes } from './add-ons/woodtypes';
import { Footer } from "./components/footer";
import Slideshow from "./newstuff/slideshow";


export const FrontPage = () => {
    return (
        <div>
            <div className="">
            <div className="hero-text see-text">
    <h1>Nazwood Millworks</h1>
    <p>Quality and service is our passion</p>
    <p className="contactus"><a href="#contact" className="contactus">Contact us</a></p>
  </div>
                <Slideshow />
                <div className="wood-border">
                    <div id="about"></div>
                    <AboutUs />
                    <div id="work"></div>
                    <OurWork />
                    <div id="reviews"></div>
                    <Reviews />
                </div>
                <Footer /><div id="contact"></div>
            </div>
        </div>
    )
}