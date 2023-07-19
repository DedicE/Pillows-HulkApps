import React from "react";
import "./Navbar.css";
import veteran from "../../assets/veteran.png";

function Navbar() {
  return (
    <div className="d-block top_header px-xl-3">
      <div className="container-fluid">
        <div className="row">
          <div className="topbar-header col-12 py-2 d-flex align-items-center justify-content-between">
            <div className="align-items-center d-lg-flex d-none">
              <img src={veteran} alt="logo" className="veteran_logo" />
              <p className="display-mojfont m-0 font-weight-Medium">
                Veteran Owned Business
              </p>
            </div>
            <div className="center-container equal-height col-12 is-selected">
              <p className="d-lg-flex d-block justify-content-center text-center display-custom m-0 f-12">
                <span className="font-weight-bold pr-2 d-block">
                  Free Shipping and Free Returns
                </span>
                <span className="d-block">
                  Free shipping on orders over $99 and prepaid return label.
                </span>
                <a href="/" className="topbar pl-2">
                  See details.
                </a>
              </p>
            </div>
            <span className="d-lg-block d-none">
              <a href="/" className=" m-0 font-weight-Medium">
                Contact Us
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
