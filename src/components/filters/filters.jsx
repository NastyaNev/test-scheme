import React from "react";
import styles from "./filters.module.css";
import fontStyles from "../../fonts/fonts.module.css";

function Filters() {
  return (
    <li className={styles.filters_container}>
      <p className={`${styles.filters_header} ${fontStyles.light_italic}`}>
        filter by:
      </p>
      <ul className={styles.filters}>
        <li>
          <button className={fontStyles.regular}>User name</button>
        </li>
        <li>
          <input className={fontStyles.regular} placeholder="Title"></input>
        </li>
        <li>
          <label for="favorite">Favorite</label>
          <input type="checkbox" name="filter" id="favorite" value="favorite" />
        </li>
      </ul>
    </li>
  );
}

export default Filters;
