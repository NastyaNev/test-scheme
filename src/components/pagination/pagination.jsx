import React from "react";
import fontstylesNumbers from "../../fonts/fonts.module.css";
import stylesNumbers from "./numbers-styles.module.css";
import styles from "./pagination.module.css";

function Pagination({ postsPerPage, totalPosts, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`${styles.numbers_section_container} ${stylesNumbers.numbers_section_container} ${fontstylesNumbers.light_italic}`}
    >
      <span className={stylesNumbers.span}>page:</span>
      <nav>
        <ul
          className={`${stylesNumbers.numbers_container} ${fontstylesNumbers.light_italic}`}
        >
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => {
                  paginate(number);
                }}
                href="#"
                className={
                  number === currentPage
                    ? `${stylesNumbers.number} ${stylesNumbers.number_active}`
                    : stylesNumbers.number
                }
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
