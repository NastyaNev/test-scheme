import React, { useState } from "react";
import styles from "./post-card.module.css";
import fontStyles from "../../fonts/fonts.module.css";
import trash from "../../images/trash.svg";
import comments from "../../images/comment-dots.svg";
import edit from "../../images/pen-square.svg";
import star from "../../images/star.svg";
import starActive from "../../images/star_active.svg";
import { useSelector } from "react-redux";

function PostCard({ post }) {
  // const [isHovered, setIsHovered] = useState(false);
  // const handleHover = () => {
  //   setIsHovered(!isHovered);
  // };

  const users = useSelector((state) => state.users.array);

  const userInfo = users.find((i) => i.id === post.userId);

  return (
    <div className={styles.card_container}>
      <div className={styles.name_container}>
        <p className={`${fontStyles.light_italic} ${styles.name}`}>
        {userInfo.name}
        </p>
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
              <img src={comments} alt="comments" className={styles.icon} />
            </li>
            <li>
              <img src={edit} alt="edit" className={styles.icon} />
            </li>
            <li>
              <img src={trash} alt="trash" className={styles.icon} />
            </li>
          </ul>
        </li>
        <li>
          <img
            src={star}
            // {isHovered ? starInactiveHover : starInactive}
            // onMouseEnter={handleHover}
            // onMouseLeave={handleHover}
            alt="favorite"
            className={styles.icon}
          />
        </li>
      </ul>
    </div>
  );
}

export default PostCard;
