import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Sort from "../sort/sort";
import Filters from "../filters/filters";
import styles from "./app.module.css";
import fontStyles from "../../fonts/fonts.module.css";
import { useDispatch } from "react-redux";
import { getItems, getNames } from "../../services/actions/actions";
import { useSelector } from "react-redux";
import Pagination from "../pagination/pagination";
import AmountOnPage from "../pagination/amount-on-page/amount-on-page";
import Posts from "../posts/posts";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.array);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState("10");

  useEffect(() => {
    dispatch(getNames());
    dispatch(getItems());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setPosts = (newPostsPerPage) => {
    if (newPostsPerPage != postsPerPage) {
      setCurrentPage(1);
    }
    setPostsPerPage(newPostsPerPage);
  };

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ul className={styles.table_header}>
          <Filters />
          <Sort />
        </ul>
        <div className={styles.choose_line_container}>
          <div className={styles.choose_container}>
            <label
              className={`${styles.choose_header} ${fontStyles.light_italic}`}
              for="choose"
            >
              -choose
            </label>
            <input type="checkbox" name="" id="" value="choose" />
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <AmountOnPage
            setPostsPerPage={setPosts}
            posts={posts}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
        <Posts posts={currentPosts} />
      </main>
    </div>
  );
}

export default App;
