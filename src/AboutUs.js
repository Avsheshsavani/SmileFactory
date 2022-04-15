import React from "react";

const AboutUs = () => {
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/about.jpg" alt="aboutUs" />
            </div>

            {/* 1st section right side data */}
            <div className="col-12 col-lg-7 our-services-list">

              <h1 className="main-heading">About Us</h1>
              <hr/>
              
              <div className="row our-services-info">
                <div className="col-10 our-services-data">
                  <p className="main-hero-para">
                    {" "}
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Unde impedit aut adipisci et? Consectetur fugit beatae,
                    temporibus dolorem at doloremque. Laudantium sint, eveniet,
                    impedit, doloribus dignissimos totam et nostrum autem
                    accusamus excepturi accusantium suscipit necessitatibus
                    omnis sed voluptatum minima ducimus? Odio distinctio, odit
                    cumque ut itaque architecto blanditiis nostrum. Nemo.
                  </p>
                </div>
              </div>
              {/* </>
                );
              })} */}

              <br />
              <button className="btn-style btn-style-border">
                {" "}
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}

      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            {/* 1st section right side data */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-star flex-column">
              <h1 className="main-heading">
                Our Team <hr />
              </h1>

              <div className="row our-services-info">
                <div className="col-10 our-services-data">
                  <h2>Dr.Sanskruti Patel </h2>
                  <lable ms-auto>(BDS)</lable>
                  <p className="main-hero-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt animi reprehenderit quos necessitatibus a delectus!</p>
                </div>
              </div>

              
              
            </div>
            {/* image section */}

            <div className="col-12 col-lg-5  our-services-rightside-img">
              <img src="./images/doc.jpg" alt="aboutUs" className="doctor-pic"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

