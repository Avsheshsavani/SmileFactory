import React from "react";
import { NavLink } from "react-router-dom";
const Homes = () => {
  return (
    <>
      <section className="hero-section">
        <div className="tag-line">
          <img
            src="./Images/Asset-7.png"
            alt="smile-logo"
            className="img-fluid smily-hover"
          />
          <h2> We Value your Smile</h2>
          <div>
            <button type="button" className="btn btn-lg btn-book ">
              <NavLink to="/contact"> Book Appoinment </NavLink>{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homes;
