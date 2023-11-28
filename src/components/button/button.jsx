import React from 'react';
import styles from "./button.module.css";
import fontStyles from "../../fonts/fonts.module.css";

function Button({buttonText}) {
  return (
    <button className={styles.button}><p className={`${styles.button_text} ${fontStyles.bold}`}>{buttonText}</p></button>
  )
}

export default Button