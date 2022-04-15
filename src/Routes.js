import React from "react";
import Navbar from "./Navbar";
import Homes from './Homes'
import AboutUs from "./AboutUs";
import ServiceS from "./ServiceS";
import Gallarys from "./Gallarys";
import Contact from "./Contact";
import Footer from "./Footer";

function Routes() {
  return (
   <>
   <Navbar/>
   <Homes/>
   <AboutUs/>
   <ServiceS/>
   <Gallarys/>
   <Contact/>
   <Footer/>
    </>
  );
}

export default Routes;
