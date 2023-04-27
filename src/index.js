import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

console.log(Sdata[0]);

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname="DARK"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname="EXTRACURRICULAR"
      link="https://www.netflix.com/in/title/80990668"
    />
    <Card
      imgsrc="https://wallpapercave.com/wp/wp1917154.jpg"
      title="A Netflix Original Series"
      sname="STRANGER THINGS"
      link="https://www.netflix.com/in/title/80990668?source=35"
    />
  </>,
  document.getElementById("root")
);
