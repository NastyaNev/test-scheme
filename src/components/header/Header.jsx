import React from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import HeaderLink from "./HeaderLink/HeaderLink";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header__content">
        <NavLink className="header__content__logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="header__content__links_container">
          <nav className="header__content__links_container__links">
            <HeaderLink linkText="управление" way="/" />
            <HeaderLink linkText="калибровка" way="/calibration" />
            <HeaderLink linkText="wi-fi" way="/wifi" />
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
