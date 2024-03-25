// src/Card.js
import React from "react";
import "../styles/Card.css";

const Card = ({ data, color, index, logo }) => {
  const getLogoClass = (index) => {
    if (index === 2 || index === 3 || index === 4) {
      return "card-logo--large";
    } else {
      return "card-logo";
    }
  };

  const getImageClass = (index) => {
    if (index === 0) {
      return "card-image--small card-spacing";
    } else if (index === 5) {
      return "card-image--small card-spacing rotate-image";
    } else {
      return "card-image";
    }
  };

  return (
    <div className={`card`} style={{ backgroundColor: color }}>
      <div className="card-content">
        {index === 0 && <img src={logo} alt="Logo" className="corner-image" />}
        <div className="logo-container">
          <img src={data.logo} alt="Logo" className={getLogoClass(index)} />
        </div>
        <p className="card-title">{data.title}</p>
        <div className="horizontal-bar"></div>
        <p className="card-desc">{data.desc}</p>
      </div>
      <img src={data.image} alt={data.title} className={getImageClass(index)} />
    </div>
  );
};

export default Card;
