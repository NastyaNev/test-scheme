import React from "react";
import "./Control.scss";
import SliderForm from "../../components/slider-form/SliderForm";
import PageTitle from "../../components/page-title/PageTitle";

function Control() {
  const slidersControl = [
    { name: "slider1", value: "50" },
    { name: "slider2", value: "50" },
    { name: "slider3", value: "50" },
  ];

  return (
    <div class="control">
      <div class="control__d_pads"></div>
      <div className="control__calibration">
        <PageTitle title="настройка высоты и длины шага" className="control__calibration__title" />
        <SliderForm
          array={slidersControl}
          className="control__calibration__inputs_container"
        />
      </div>
    </div>
  );
}

export default Control;
