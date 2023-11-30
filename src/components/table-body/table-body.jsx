import React from "react";
import PostCard from "../post-card/post-card";
import styles from "./table-body.module.css";
import { useSelector } from "react-redux";

function TableBody() {
  const posts = useSelector((state) => state.posts.array);

  return (
    <ul className={styles.cards_conrtainer}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default TableBody;
