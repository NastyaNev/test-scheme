import React, { useEffect } from "react";
import styles from "./filters.module.css";
import fontStyles from "../../fonts/fonts.module.css";
import { useSelector } from "react-redux";

function Filters({ setPostsArray, posts, setCurrentPage }) {
  // if (document.getElementById("favorites")?.checked) {
  //   console.log("checked");
  // } else {
  //   console.log("not checked");
  // }
  const favoritePosts = [];
  const favorites = useSelector((state) => state.favorites.ids);

  const handleClick = (e) => {
    if (e.target.checked) {
      posts.forEach((i) => {
        if (favorites.includes(i.id)) {
          favoritePosts.push(i);
          setPostsArray(favoritePosts);
          setCurrentPage(1);
        }
      });
    } else {
      setPostsArray(posts);
      setCurrentPage(1);
    }
  };

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
        <li className={styles.favorites_container}>
          <label for="favorites">Favorite</label>
          <input
            type="checkbox"
            name="favorites"
            id="favorites"
            value="favorites"
            onClick={handleClick}
            favoritePosts={favoritePosts}
            className={styles.favorites_checkbox}
          />
        </li>
      </ul>
    </li>
  );
}

export default Filters;
