import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { addItems } from "../Redux/Cart";

const DetailPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelCart = (product) =>{
   dispatch(addItems(product))
  }

  const getProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("get api data", res.data);
          setProduct(res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <>
      {loading ? (
        <p>Loading...</p> // Show loading message while data is being fetched
      ) : (
        <>
        <NavLink to="/" type="button" className="btn btn-primary" >
            Back
          </NavLink>
          <div className="container">


              <div className="d-flex justify-content-between gap-100">
                <div className="image_detail">
                  <img src={product.image} alt="" />
                </div>
                <div className="d-flex justify-content-center m-auto w-50">
                  <div className="card-body px-20 py-20">
                    <h5 className="card-title  head_css mb-2">{product.title}</h5>
                    <p className="card-title des_css">{product.description}</p>
                    <div className="butn_portion mt-5 d-flex gap-3">
                      <button type="button" className="btn btn-primary" onClick={()=>handelCart(product)}>
                        ADD CART
                      </button>
                      <button type="button" className="btn btn-secondary">
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div></>
      )}
    </>
  );
};

export default DetailPage;
