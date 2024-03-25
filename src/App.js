// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/mobileHeader";
import "./styles/mobileHeader.css";
import Slider from "react-slick";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [logo, setLogo] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const colors = [
    "#41ca6e",
    "#fab153",
    "#7277d5",
    "#f87d51",
    "#ed5466",
    "#4ec2e7",
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://krds-assignment.github.io/aoc/api-assets/data.json"
        );
        setLogo(response.data.logo);
        setCardsData(response.data.features);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  console.log("isMobile:", isMobile);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlArrowRight />,
    prevArrow: <SlArrowLeft />,
  };
  return (
    <div className="App">
      <Header logo={logo} />

      {!isMobile ? (
        <div className="card-container">
          {Array.isArray(cardsData) &&
            cardsData.map((card, index) => (
              <>
                <Card
                  key={index}
                  data={card}
                  color={colors[index]}
                  index={index}
                  logo={logo}
                />
              </>
            ))}{" "}
        </div>
      ) : (
        <div className="slider-container">
          <Slider {...settings}>
            {Array.isArray(cardsData) &&
              cardsData.map((card, index) => (
                <div key={index}>
                  <Card
                    data={card}
                    color={colors[index]}
                    index={index}
                    logo={logo}
                  />
                </div>
              ))}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default App;
