import React from "react";
import Navbar from "../component/Navbar";
import Product from "../component/Product";

const Home = () => {
  return (
    <>
      

      <div className="hero_section">
         <div className="card text-bg-dark">
          <div className="image">
           <img
            src="https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/57.png?itok=iesjjdzJ"
            className="card-img"
            alt=""
            height={550} />
          </div>
          <div className="card-img-overlay d-flex flex-column justify-content-center" >
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SESSIN ARRIVALS</h5>
            <p className="card-text fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
            
          </div>
        </div>
        </div>

        <Product/>
      
      </>
      
    
  );
};

export default Home;
