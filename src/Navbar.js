import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <NavLink className="navbar" to="/">
              <img src="./images/Asset-5.png" alt="logo" className="img-fluid logo"/>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mx-2 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active fs-4" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link fs-4" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/services">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fs-4" to="/gallary">
                    Gallary
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link fs-4" to="/contact">
                    ContactUs
                  </NavLink>
                </li>
              </ul>
              
                
              
            </div>
          </div>
        </nav>

        <div className="container-fluid main-hero-img ">
          
        {/* <img src="./Images/mainbanner.webp" className="img-fluid main-hero-img" alt="mainbanner"/> */}
        
        </div>
      </section>
      <section>

      </section>

    </>
  );
};

export default Navbar;
