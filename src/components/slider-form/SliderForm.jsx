import React from "react";
import Slider from "../slider/Slider";
import Button from "../button/Button";
import "./SliderForm.scss";

function SliderForm() {
  const sliders = [
    { name: "servo1", value: 300 },
    { name: "servo2", value: 200 },
    { name: "servo3", value: 30 },
    { name: "servo4", value: 50 },
    { name: "servo5", value: 10 },
    { name: "servo6", value: 120 },
    { name: "servo7", value: 190 },
    { name: "servo8", value: 100 },
    { name: "servo9", value: 70 },
    { name: "servo10", value: 40 },
    { name: "servo11", value: 250 },
    { name: "servo12", value: 230 },
  ];

  return (
    <form className="slider_form">
      <ul className="slider_form__inputs">
        {sliders.map((slider) => (
          <Slider key={slider.name} slider={slider} />
        ))}
      </ul>
      <Button text="Сохранить" />
    </form>
  );
}

export default SliderForm;
