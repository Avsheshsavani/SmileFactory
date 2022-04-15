import React, { useState } from "react";
import Gallaryapi from "./API/Gallaryapi";

const Gallarys = () => {
  const [gallaryData, setGallaryData] = useState(Gallaryapi);
  console.log(gallaryData);
  return (
    <>
      <section >
        <div className="gallary container">
          <h1 className="main-heading "> Gallary <hr/></h1>.
          
          <div className="row">
            {gallaryData.map((curElem) => {
              const { id, img } = curElem;
              return (
                <>
                  <div className="col-12 col-lg-3" key={id}>
                    <img src={img} class="img-thumbnail" alt="gallary-img" />
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

export default Gallarys;
