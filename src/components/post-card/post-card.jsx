import React, { useState } from "react";
import styles from "./post-card.module.css";
import fontStyles from "../../fonts/fonts.module.css";
import trash from "../../images/trash.svg";
import comments from "../../images/comment-dots.svg";
import edit from "../../images/pen-square.svg";
import starInactive from "../../images/star_inactive.svg";
import starInactiveHover from "../../images/star_inactive_hover.svg";
import starActiveHover from "../../images/star_active_hover.svg";
import starActive from "../../images/star_active.svg";

function PostCard() {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.name_container}>
        <p className={`${fontStyles.light_italic} ${styles.name}`}>
          Allan Carter
        </p>
        <input type="checkbox" name="" id="" value="" />
      </div>
      <h3 className={`${fontStyles.bold} ${styles.post_title}`}>
        This is post tiltle
      </h3>
      <p className={styles.post_text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
        magni dolor rerum blanditiis voluptate animi optio aliquid consequuntur
        enim veritatis nihil magnam, aut nam perspiciatis nulla, rem iste dolore
        dolorum!
      </p>
      {/* <span className={`${fontStyles.bold} ${styles.span_button}`}>
        Read more
      </span> */}
      <ul className={styles.icons_container}>
        <li>
          <ul className={styles.main_icons_container}>
            <li>
              <img src={comments} alt="comments" className={styles.icon_main} />
            </li>
            <li>
              <img src={edit} alt="edit" className={styles.icon_main} />
            </li>
            <li>
              <img src={trash} alt="trash" className={styles.icon_main} />
            </li>
          </ul>
        </li>
        <li>
          <img
            src={isHovered ? starInactiveHover : starInactive}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            alt="favorite"
            className={styles.icon_favorite}
          />
        </li>
      </ul>
    </div>
  );
}

export default PostCard;
