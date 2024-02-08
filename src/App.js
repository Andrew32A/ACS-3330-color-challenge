import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  const [targetColor, setTargetColor] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    resetGame();
  }, []);

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const resetGame = () => {
    const newColors = Array.from({ length: 3 }, generateRandomColor);
    setColors(newColors);
    setTargetColor(newColors[Math.floor(Math.random() * newColors.length)]);
    setMessage("");
  };

  const handleSwatchClick = (color) => {
    console.log("Color of swatch clicked: ", color);
    if (color === targetColor) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect :(");
    }
  };

  return (
    <div className="App">
      <div className="colorWrapper">
        {colors.map((color, index) => (
          <div
            key={index}
            className="colorSwatch"
            style={{ backgroundColor: color }}
            onClick={() => handleSwatchClick(color)}
          >
            {message && <span className="colorSwatchSpan">{color}</span>}{" "}
          </div>
        ))}
      </div>
      <p>Click the swatch that matches: {targetColor}</p>
      <p>{message}</p>
      <button className="playAgainButton" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
}

export default App;
