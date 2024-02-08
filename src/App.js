import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showSwatches, setShowSwatches] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    if (!showSwatches) {
      setCountdown(3);
      const interval = setInterval(() => {
        setCountdown((currentCountdown) => {
          if (currentCountdown <= 1) {
            clearInterval(interval);
            setShowSwatches(true);
            return 0;
          }
          return currentCountdown - 1;
        });
      }, 1000);
    }
  }, [showSwatches]);

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const resetGame = () => {
    setShowSwatches(false);
    const newColors = Array.from({ length: 3 }, generateRandomColor);
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * newColors.length)]);
    setMessage("");
    setSelectedColor("");
  };

  const handleSwatchClick = (color) => {
    setSelectedColor(color);
    if (color === targetColor) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect :(");
    }
  };

  return (
    <div className="App">
      {showSwatches ? (
        <div className="colorWrapper">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`colorSwatch ${
                message === "Incorrect :(" && color === targetColor
                  ? "correctSwatch"
                  : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleSwatchClick(color)}
            >
              {message && <span className="colorSwatchSpan">{color}</span>}
            </div>
          ))}
        </div>
      ) : (
        <p>Get ready... {countdown}</p>
      )}
      <p>Click the swatch that matches: {targetColor}</p>
      <p>{message}</p>
      <button className="playAgainButton" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}

export default App;
