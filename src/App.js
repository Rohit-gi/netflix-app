import React from "react";
import "./index.css";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favSeries = "Netflix"


function App() {
  return (
    <>
      <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
      {favSeries === "Netflix" ? <Netflix /> : <Amazon/> }
    </>
  );
}

export default App;
