import React from "react";
import styles from "./post-card.module.css";
import fontStyles from "../../fonts/fonts.module.css";

function PostCard() {
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
    </div>
  );
}

export default PostCard;
