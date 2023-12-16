import React from "react";
import { Outlet } from "react-router-dom";
import './Wifi.scss';
import PageTitle from "../../components/page-title/PageTitle";

function Wifi() {
  return (
    <div className='wifi_page'>
      <PageTitle title="настройка wi-fi" />
      <Outlet />
    </div>
  );
}

export default Wifi;
