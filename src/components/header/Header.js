import React from "react";
import LOGO from "../../assets/logo.jpg";
import "../header/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <img className="logo" src={LOGO} alt="logo of HAU" />
        <h1>Hindustan Agarbatti Udyog</h1>
        <div className="desc">
          <h3>Location</h3>
          <h3>gst</h3>
        </div>
      </div>
      <div class="header-nav">
        <div class="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Products</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
