import React, { useState } from "react";
import PostCard from "../post-card/post-card";
import styles from "./table-body.module.css";
import { useSelector } from "react-redux";

function TableBody() {
  const posts = useSelector((state) => state.posts.array);
  // const postsAmount = posts.slice(0, amount);
  // const amount = e.target.value;

  // const [amountPosts, setAmountPosts] = useState(10);
  // const handleClick = () => {
  //   setAmountPosts(amount)
  // };

  return (
    <ul className={styles.cards_conrtainer}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}

export default TableBody;
