import React from "react";
import ReactDOM from "react-dom";

let demo = React.createElement(
  "h1",
  { style: { color: "green" } },
  "Welcome to New React Project",
);
ReactDOM.render(demo, document.getElementById("root"));
