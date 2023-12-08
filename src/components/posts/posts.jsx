import React from "react";
import Post from "../post/post";
import styles from "./posts.module.css";

function Posts({ posts }) {
  return (
    <ul className={styles.cards_conrtainer}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default Posts;
