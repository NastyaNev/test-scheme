import React, { useState } from "react";
import "./Slider.scss";

function Slider({ slider }) {
  const [value, setValue] = useState(slider.value);

  return (
    <li
      className="slider_container"
      //   onSubmit={(e) => {
      //     e.preventDefault();
      //     // amount = value;
      //   }}
    >
      <label htmlFor="myRange" className="slider_name">{slider.name}</label>
      <div className="inputs">
        <input
          type="range"
          min="0"
          max="300"
          step="10"
          defaultValue={value}
          className="slider"
          id="myRange"
          onInput={() =>
            (document.getElementById("amount").value =
              document.getElementById("myRange").value)
          }
        />
        <input
          type="number"
          id="amount"
          min="0"
          max="300"
          onInput={() =>
            (document.getElementById("myRange").value =
              document.getElementById("amount").value)
          }
          defaultValue={value}
          className="slider_value"
        />
      </div>
    </li>
  );
}

export default Slider;
