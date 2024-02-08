import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="colorWrapper">
        <div
          className="colorSwatch"
          style={{ backgroundColor: "#FF0000" }}
        ></div>
        <div
          className="colorSwatch"
          style={{ backgroundColor: "#00FF00" }}
        ></div>
        <div
          className="colorSwatch"
          style={{ backgroundColor: "#0000FF" }}
        ></div>
      </div>
      <p>Click the swatch that matches {}</p>
    </div>
  );
}

export default App;
