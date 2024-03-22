// src/Card.js
import React, { useState } from "react";
import "../styles/Card.css";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Card = ({
  data,
  color,
  index,
  logo,
  isActive,
  onNext,
  onPrevious,
  setCurrentCardIndex,
}) => {
  console.log(setCurrentCardIndex);
  const radiobtns = [1, 2, 3, 4, 5, 6];
  const [currentRadio, setCurrentRadio] = useState(1);

  const handleRadioChange = (radio) => {
    setCurrentRadio(radio);
    setCurrentCardIndex(index);
  };

  const handleNext = () => {
    onNext();
    setCurrentRadio(index + 2);
    console.log(currentRadio, index);
  };

  const handlePrevious = () => {
    onPrevious();
    setCurrentRadio(index);
    console.log(currentRadio);
  };

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
    <div
      className={`card ${isActive ? "active" : ""}`}
      style={{ backgroundColor: color }}
    >
      <div className="card-content">
        {index === 0 && <img src={logo} alt="Logo" className="corner-image" />}
        <button className="arrow left-arrow" onClick={handlePrevious}>
          <SlArrowLeft />
        </button>
        <div className="logo-container">
          <img src={data.logo} alt="Logo" className={getLogoClass(index)} />
        </div>
        <p className="card-title">{data.title}</p>
        <div className="horizontal-bar"></div>
        <p className="card-desc">{data.desc}</p>
      </div>
      <img src={data.image} alt={data.title} className={getImageClass(index)} />
      <div className="navigation-manual">
        {radiobtns.map((radio) => (
          <input
            key={radio}
            type="radio"
            id={`radio${radio}`}
            className={`manual-btn ${currentRadio === radio ? "filled" : ""}`}
            checked={currentRadio === radio}
            onChange={() => handleRadioChange(radio)}
          />
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>
        <SlArrowRight />
      </button>
    </div>
  );
};

export default Card;
