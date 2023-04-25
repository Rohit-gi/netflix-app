import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards"
import "./index.css"


ReactDOM.render(
<>
<Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
  title = "A Netflix Original Series"
  sname = "DARK"
  link = "https://www.netflix.com/in/title/80990668?source=35"
/>
<Card/>
<Card/>
</>
,
  document.getElementById("root")
);
