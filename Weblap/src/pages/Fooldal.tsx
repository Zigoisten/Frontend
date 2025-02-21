import React from "react";
import "./Stilus.css";
import IAmJustAFish from "./fish-spinning.gif";

function Fooldal() {
  return (
    <div className="container">
      <header className="header">
        <div className="nav-item"></div>
        <div className="nav-item"></div>
        <div className="nav-item"></div>
        <div className="nav-item"></div>
      </header>

      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-item"></div>
          <div className="sidebar-item"></div>
          <div className="sidebar-item"></div>
          <div className="sidebar-item"></div>
          <div className="sidebar-item"></div>
          <div className="sidebar-item"></div>
        </aside>

        <main className="content">
          <div className="image-container">
            <img src={IAmJustAFish} alt="Dont Cry I am Just a Fish" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Fooldal;
