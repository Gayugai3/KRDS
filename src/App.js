// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/mobileHeader";
import "./styles/mobileHeader.css";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [logo, setLogo] = useState("");
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
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
        // console.log(response.data.logo);
        setLogo(response.data.logo);
        setCardsData(response.data.features);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const goToNextCard = () => {
    const isLastSlide = currentCardIndex === cardsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentCardIndex + 1;
    setCurrentCardIndex(newIndex);
    console.log(currentCardIndex);
  };

  const goToPreviousCard = () => {
    const isFirstSlide = currentCardIndex === 0;
    const newIndex = isFirstSlide ? cardsData.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(newIndex);
    console.log(newIndex);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-index",
      currentCardIndex
    );
  }, [currentCardIndex]);

  return (
    <div className="App">
      <Header logo={logo} />
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
                isActive={index === currentCardIndex}
                onNext={goToNextCard}
                onPrevious={goToPreviousCard}
                setCurrentCardIndex={setCurrentCardIndex}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
