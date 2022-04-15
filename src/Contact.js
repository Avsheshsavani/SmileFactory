import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://smile-factory-324104-default-rtdb.firebaseio.com/userInput.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Detail send succesfully");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
          <h1 className="main-heading fw-bold ">
                    Book Your Appoiment Now
                    
                  </h1>
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                 

                  <div className="map-Div">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14875.03860523653!2d72.8515337!3d21.2413774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7306b881197080d1!2sSmile%20Factory-%20we%20value%20your%20smile!5e0!3m2!1sen!2sin!4v1629954406730!5m2!1sen!2sin"
                      className="map"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* right side contact form */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        ></input>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                        ></input>
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email Address"
                          value={userData.email}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter your Message"
                          value={userData.message}
                          onChange={postUserData}
                        ></input>
                      </div>
                    </div>
                    <div className="contact-btn">

                    <button
                      type="submit"
                      onClick={submitData}
                      className="btn btn-style  w-100"
                    >
                      Submit
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ); 
};

export default Contact;
  