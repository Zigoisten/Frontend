import React from "react";
import "./Stilus.css";

function Fooldal() {
  return (
    <div className="container">
      <header className="header">Számlálóm :) :3 </header>

      <main className="counter-section">
        <div className="counter-container">
          <div className="button-group">
            <button className="counter-button">+</button>
            <button className="counter-button">+</button>
          </div>

          <div className="counter-display">
            <p>Counter value:</p>
            <h1>100</h1>
          </div>

          <div className="button-group">
            <button className="counter-button">-</button>
            <button className="counter-button">-</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Fooldal;
