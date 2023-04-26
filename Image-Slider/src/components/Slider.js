import React from "react";
import data from "./Imagedata";
import "./Slider.css";

export default function Slider(props) {
  const slide = data.map((d, index) => {
    return (
      <div
        key={index}
        className={
          index === props.slideIndex ? "myslides fade" : "myslidesnone"
        }
      >
        <img src={d.src} alt={d.caption} />
        <div className="text">{d.caption}</div>
      </div>
    );
  });
  return slide;
}
