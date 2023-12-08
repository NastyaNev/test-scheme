import React, { useState } from "react";
import fontStyles from "../../../fonts/fonts.module.css";
import { useSelector } from "react-redux";
import styles from "./name-filter.module.css";

function NameFilter({ posts, postsArray, setPostsArray }) {
  const users = useSelector((state) => state.users.array);

  const [open, setOpen] = useState(false);

  const onNameClick = (e) => {
    if (e.target.textContent === "-all") {
      setPostsArray(posts);
      setOpen(false);
    } else {
      const user = users.find((u) => u.name === e.target.textContent);
      const filteredByName = postsArray.filter((i) => i.userId === user.id);
      setPostsArray(filteredByName);
      setOpen(false);
    }
  };

  const closeOnBackgroundClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <li>
      <button
        className={`${fontStyles.regular} ${styles.user_name_button}`}
        onClick={() => {
          setOpen(!open);
          setPostsArray(posts);
        }}
      >
        User name
      </button>
      <div
        className={
          open ? styles.menu_container : styles.menu_container_inactive
        }
      >
        <div
          className={styles.overlay}
          id="overlay"
          onClick={closeOnBackgroundClick}
        ></div>
        <ul className={styles.names_menu}>
          <li key="0">
            <a
              href="#"
              className={`${styles.name} ${styles.all}`}
              onClick={onNameClick}
            >
              -all
            </a>
          </li>
          {users.map((user) => (
            <li key={user.id}>
              <a href="#" className={styles.name} onClick={onNameClick}>
                {user.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default NameFilter;
