import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <figure>
          <img src={`${process.env.PUBLIC_URL}/aqi-icon.png`} alt="logo" />
          <figcaption>Air Quality Index of Indian Cities</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default Header;
