import React from "react";
import { Outlet } from "react-router-dom";
import './Wifi.scss';

function Wifi() {
  return (
    <div className='wifi_page'>
      <h1>настройка wi-fi</h1>
      <Outlet />
    </div>
  );
}

export default Wifi;
