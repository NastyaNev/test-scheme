import React from "react";
import styles from "./sort.module.css";
import fontStyles from "../../fonts/fonts.module.css";

function Sort() {
  return (
    <li className={styles.sort_container}>
      <p className={`${styles.sort_header} ${fontStyles.light_italic}`}>
        sort by:
      </p>
      <ul className={styles.sort}>
        <li><button className={fontStyles.regular}>Id</button></li>
        <li><button className={fontStyles.regular}>Title</button></li>
        <li><button className={fontStyles.regular}>User name</button></li>
        <li><button className={fontStyles.regular}>Favorite</button></li>
      </ul>
    </li>
  );
}

export default Sort;
