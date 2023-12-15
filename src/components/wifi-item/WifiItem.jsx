import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import wifi_icon_active from "../../images/fa6-solid_wifi_active.svg";
import "./WifiItem.scss";

function WifiItem({ name }) {
  const [isHovered, setIsHovered] = useState(false);
  const [wifiName, setWifiNAme] = useState("");

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <NavLink
      to={`/wifi/connection-to-/${name}`} state={{name}}
      className={isHovered ? "wifi_item__active" : "wifi_item"}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img
        src={isHovered ? wifi_icon_active : wifi_icon}
        className="wifi_item__icon"
        alt="wifi"
      />
      <span>{name}</span>
    </NavLink>
  );
}

export default WifiItem;
