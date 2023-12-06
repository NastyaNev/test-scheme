import React from "react";
import Post from "../post/post";
import styles from "./posts.module.css";

function Posts({ posts, setPostIsChecked, postIsChecked }) {
  return (
    <ul className={styles.cards_conrtainer} >
      {posts.map((post) => (
        <Post key={post.id} post={post} setPostIsChecked={setPostIsChecked} postIsChecked={postIsChecked} />
      ))}
    </ul>
  );
}

export default Posts;
