import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const cartdata = useSelector((store)=> store.cart.value)
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 ">
          <div className="container-fluid bg-color">
            <a className="navbar-brand" href="#">
              V-Collection
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link active" aria-current="page" href="#">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/product" className="nav-link active" aria-current="page" href="#">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active" aria-current="page" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="button d-flex gap-2">
               <Link to="/cart">
               <a className="btn btn-outline-dark" href="#" role="button">
                  <i className="bi bi-cart4"></i> Cart({cartdata.length})
                </a></Link> 
                <a className="btn btn-outline-dark" href="#" role="button">
                  <i className="bi bi-person-fill-add"></i>Registration{" "}
                </a>
                <a className="btn btn-outline-dark" href="#" role="button">
                  <i className="bi bi-box-arrow-in-right"></i>Log in
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
