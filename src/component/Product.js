import axios from "axios";

import React, { useEffect, useState } from "react";
import Card_Design from "./Card_Design";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [filter, setfilter] = useState(product);


  const getData = () => {
    axios.get("https://fakestoreapi.com/products/")
      .then((res) => {
        if (res.status === 200) {
          console.log("api avaiable", res.data);
          setProduct(res.data)
          setfilter(res.data);
        }
      })
      .catch((err) => {
        console.log("not availabe data", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);
   

  const FilterProduct = (cat) =>{
    const updateList = product.filter((x)=>x.category === cat);
    setfilter(updateList);
  }

  return (
    <>
      <div className="button MT-70 mb-10">
        <h3 className="d-flex justify-content-center">Product Feature</h3>
        
        <hr />

        <div className="button_portion d-flex justify-content-center gap-2">
          <button className="btn btn-outline-dark me-2" onClick={()=>setfilter(product)}>
            ALL
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("men's clothing")}>
          men's clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("women's clothing")}>
            Women`s Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("jewelery")}>
            Jewelery
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>FilterProduct("electronics")}>
            Electronic
          </button>
        </div>
        </div>
        <div className="card_portion gap-2 mt-5 ">
        {filter.map((key)=>{
            return(
                <>
                <NavLink  to={`/product/${key.id}`}>
                <Card_Design image={key.image} title={key.title} price={key.price}/>
                </NavLink>
              
              
              </>
            )
        })}
        </div>
        
         
      
    </>
  );
};

export default Product;