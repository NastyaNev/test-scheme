import React from "react";
import logo from "../../images/logo.svg";
import styles from "./header.module.css";
import Button from "../button/button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Button buttonText="Add post" />
      </div>
    </header>
  );
}

export default Header;
