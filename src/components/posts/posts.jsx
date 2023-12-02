import React, { useState } from "react";
import Post from "../post/post";
import styles from "./posts.module.css";

function Posts({ posts }) {
  // const postsAmount = posts.slice(0, amount);
  // const amount = e.target.value;

  // const [amountPosts, setAmountPosts] = useState(10);
  // const handleClick = () => {
  //   setAmountPosts(amount)
  // };

  return (
    <ul className={styles.cards_conrtainer}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default Posts;
