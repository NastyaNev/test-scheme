import React from "react";
import PageTitle from "../../components/page-title/PageTitle";
import SliderForm from "../../components/slider-form/SliderForm";
import "./Calibration.scss";

function Calibration() {
  const slidersCalibration = [
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
    <div className="calibration">
      <PageTitle title="калибровка" className="calibration__title" />
      <SliderForm array={slidersCalibration} className="calibration__inputs_container" />
    </div>
  );
}

export default Calibration;
