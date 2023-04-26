import React from "react";
import data from "./Imagedata";
import "./Dots.css";

export default function Dots(props) {
  const dots = data.map((data, index) => {
    return (
      <span
        key={index}
        className={index === props.slideIndex ? "dot active" : "dot"}
      ></span>
    );
  });
  return <div className="dots-container">{dots}</div>;
}
