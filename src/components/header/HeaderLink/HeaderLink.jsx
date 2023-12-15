import React from 'react';
import { NavLink } from 'react-router-dom';
import "./HeaderLink.scss"

function HeaderLink({ linkText, way }) {
  const setActiveLinkStyle = ({ isActive }) => {
    return isActive ? 'header_link header_link__active' : 'header_link';
  }

  return (
    <NavLink className={setActiveLinkStyle} to={way}>{linkText}</NavLink>
  )
}

export default HeaderLink