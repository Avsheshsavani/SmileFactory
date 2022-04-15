import React,{useState} from "react";
import Serviceapi from "./API/ServiceAPI";

const ServiceS = () => {
    const [serviceData, setServiceData] = useState(Serviceapi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
          <h1 className="main-heading text-center fw-bold">
            Treatment We Provide<hr/>
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, img, title, info } = curElem;
              return (
                <>
                  <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                    
                    <img src={img} alt="service"className="img-fluid service-img thumbnail"/>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceS;
