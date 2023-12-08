import React from "react";
import styles from "./choose-all.module.css";
import fontStyles from "../../fonts/fonts.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllChecked,
  setNotChecked,
} from "../../services/reducers/chooseSlice";

function ChooseAll({ postsArray }) {
  const dispatch = useDispatch();
  const choose = useSelector((state) => state.choose);

  const handleChooseAllCheckboxClick = (e) => {
    if (e.target.checked) {
      dispatch(setAllChecked(postsArray));
    } else {
      dispatch(setNotChecked());
    }
  };

  const handleHiddenButtonClick = (e) => {
    e.target.classList.add(styles.hidden_button_active);
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
          onClick={handleChooseAllCheckboxClick}
        />
      </div>
      <ul
        className={
          choose.hiddenMenu
            ? styles.hidden_buttons_container_inactive
            : styles.hidden_buttons_container
        }
      >
        <li>
          <a
            href="#"
            className={`${styles.hidden_button} ${fontStyles.light_italic}`}
            onClick={handleHiddenButtonClick}
          >
            Add to favorites
          </a>
        </li>
        <li>
          <a
            href="#"
            className={`${styles.hidden_button} ${fontStyles.light_italic}`}
            onClick={handleHiddenButtonClick}
          >
            Delete
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ChooseAll;
