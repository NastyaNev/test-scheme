import React from "react";
import PostCard from "../post-card/post-card";
import styles from "./table-body.module.css";

function TableBody() {
  return (
    <ul className={styles.cards_conrtainer}>
      <PostCard />
    </ul>
  );
}

export default TableBody;
