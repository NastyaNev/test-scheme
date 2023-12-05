import React, { useEffect, useState } from "react";
import styles from "./post.module.css";
import fontStyles from "../../fonts/fonts.module.css";
import trash from "../../images/trash.svg";
import comments from "../../images/comment-dots.svg";
import edit from "../../images/pen-square.svg";
import star from "../../images/star.svg";
import starActive from "../../images/star_active.svg";
import { useSelector } from "react-redux";
import { setToFavorites } from "../../services/reducers/favoritesSlice";
import { useDispatch } from "react-redux";

function Post({ post }) {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.array);
  const userInfo = users.find((i) => i.id === post.userId) || {};
  const favorites = useSelector((state) => state.favorites.ids);

  const [isActive, setIsActive] = useState(star);

  useEffect(() => {
    favorites.includes(post.id) ? setIsActive(starActive) : setIsActive(star);
  }, []);

  const handleClick = () => {
    dispatch(setToFavorites(post.id));
    isActive === star ? setIsActive(starActive) : setIsActive(star);
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.header_line}>
        <div className={styles.name_container}>
          <span className={`${fontStyles.light_italic} ${styles.id}`}>
            #{post.id}
          </span>
          <p className={`${fontStyles.light_italic} ${styles.name}`}>
            {userInfo.name}
          </p>
        </div>
        <input type="checkbox" name="" id="" value="" />
      </div>
      <h3 className={`${fontStyles.bold} ${styles.post_title}`}>
        {post.title}
      </h3>
      <p className={styles.post_text}>{post.body}</p>
      {/* <span className={`${fontStyles.bold} ${styles.span_button}`}>
        Read more
      </span> */}
      <ul className={styles.icons_container}>
        <li>
          <ul className={styles.main_icons_container}>
            <li>
              <button className={styles.button}>
                <img src={comments} alt="comments" className={styles.icon} />
              </button>
            </li>
            <li>
              <button className={styles.button}>
                <img src={edit} alt="edit" className={styles.icon} />
              </button>
            </li>
            <li>
              <button className={styles.button}>
                <img src={trash} alt="trash" className={styles.icon} />
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button className={styles.button} onClick={handleClick}>
            <img
              src={isActive}
              // {isHovered ? starInactiveHover : starInactive}
              // onMouseEnter={handleHover}
              // onMouseLeave={handleHover}
              alt="favorite"
              className={styles.icon}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Post;
