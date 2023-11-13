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
            src="https://cdn-bijap.nitrocdn.com/AuMaQmessFRMSicXmZsEecJFLEquAyoT/assets/images/optimized/rev-6c8b18a/www.the-future-of-commerce.com/wp-content/uploads/2020/01/thumbnail-d771a7f4e38fcf7614f297ea6c90f497-1200x370.jpeg"
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
