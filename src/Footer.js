import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                  <div className="row">
                    <div className="col-4 col-lg-4">
                      <h2>Address<hr/>
                      <p className="main-hero-para"><a href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.03860523653!2d72.8515337!3d21.2413774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7306b881197080d1!2sSmile%20Factory-%20we%20value%20your%20smile!5e0!3m2!1sen!2sin!4v1629954406730!5m2!1sen!2sin">116,117, 1st floor, Cross Road Shopping Centre Nr.New Bharat Petrol Pump, Sayan Rd, Amroli, Surat, Gujarat 394107</a></p>
                      </h2>
                    </div>
                    <div className="col-4 col-lg-4">
                      <h2>Services<hr/>
                      </h2>
                      <ul>
                        <li><NavLink to="/services">Root canal</NavLink></li>
                        <li><NavLink to="/services">Implant</NavLink></li>
                        <li><NavLink to="/services">Restoration</NavLink></li>
                        <li><NavLink to="/services">Radiographs</NavLink></li>
                        <li><NavLink to="/services">Extraction</NavLink></li>
                      </ul>
                    </div>
                    <div className="col-4 col-lg-4">
                      <h2>Follow Us<hr/>
                      </h2>
                      <div className="row">
                        <div className="col-4 mx-auto">
                          <a href="#">
                            <i className="fab fa-facebook fontawesome-style"></i>
                          </a>
                        </div>
                        <div className="col-4 mx-auto">
                          <a href="#">
                            <i className="fab fa-instagram fontawesome-style"></i>
                          </a>
                        </div>
                        <div className="col-4 mx-auto">
                          <a href="#">
                            <i className="fab fa-youtube fontawesome-style"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr/>
                  <div className="mt-5">
                    <p className="main-hero-para text-center w-100">Copywite @ 2021 Smile-Factory . All Right Reserverd.</p>
                  </div>
                </div>
              </div>
              
            </div>
            </footer> 
        </>
    )
}

export default Footer
