import React from "react";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

function App() {
  return (
    <>
      <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
      {Sdata.map((val) => {
        
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>
  );
}

export default App;
