import React, { useState } from "react";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import { useLocation } from "react-router-dom";
import './ConnectForm.scss' ;
import Button from "../button/Button";

function ConnectForm() {
  const location = useLocation();

  return (
    <form>
      <label htmlFor="pass">
        <img src={wifi_icon} alt="wifi_icon" />
        <span>{location.state.name}</span>
      </label>
      <input type="password" id="pass" name="password" minLength="6" required />
      <Button text="Подключиться" />
    </form>
  );
}

export default ConnectForm;
