import React from "react";
import logo from "./vomva.svg";
import "./Home.css";

function Home() {
  return (
    <div classname="header">
      <header className="h1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>How to... execute a bomb</p>
      </header>
    </div>
  );
}

export default Home;
