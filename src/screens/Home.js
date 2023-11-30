import React from "react";
import logo from "./vomva.svg";
import "./Home.css";

function Home() {
  return (
    <div>
      <p className="title">How to... execute a bomb</p>
      <img src={logo} className="App-logo" alt="logo" />
      <a href="/game1">
        <div className="header">
          <buttorn className="title">Chemical</buttorn>
        </div>
      </a>
      <a href="/game2">
        <div className="header">
          <buttorn className="title">Electrical</buttorn>
        </div>
      </a>
      <a href="/game3">
        <div className="header">
          <buttorn className="title">Radioenergy</buttorn>
        </div>
      </a>
      <a href="/game4">
        <div className="header">
          <buttorn className="title">Genetics</buttorn>
        </div>
      </a>
    </div>
  );
}

export default Home;
