import React, { useState } from "react";
import styles from "./choose-all.module.css";
import fontStyles from "../../fonts/fonts.module.css";

function ChooseAll({ setPostIsChecked }) {
  const [hidden, setHidden] = useState(true);

  const handleClick = (e) => {
    if (e.target.checked) {
      setHidden(false);
      setPostIsChecked(true);
    } else {
      setHidden(true);
      setPostIsChecked(false);
    }
  };

  return (
    <div className={styles.choose_container}>
      <div className={styles.input_container}>
        <label
          className={`${styles.choose_label} ${fontStyles.light_italic}`}
          htmlFor="choose"
        >
          -choose all
        </label>
        <input
          type="checkbox"
          name="choose"
          id="choose"
          value="choose"
          className={styles.choose_checkbox}
          onClick={handleClick}
        />
      </div>
      <ul className={hidden ? styles.hidden_buttons_container_inactive : styles.hidden_buttons_container}>
        <li>
          <a
            href="#"
            className={`${styles.hidden_button} ${fontStyles.light_italic}`}
          >
            Add to favorites
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.hidden_button} ${fontStyles.light_italic}`}
          >
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ChooseAll;
