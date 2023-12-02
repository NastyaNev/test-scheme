import React from "react";
import fontstylesNumbers from "../../../fonts/fonts.module.css";
import stylesNumbers from "../numbers-styles.module.css";

function AmountOnPage({ setPostsPerPage, posts }) {
  const handleClick = (e) =>
    setPostsPerPage(
      e.target.textContent === "all" ? posts.length : e.target.textContent
    );

  return (
    <div className={`${stylesNumbers.numbers_section_container} ${fontstylesNumbers.light_italic}`}>
      <span className={stylesNumbers.span}>on page:</span>
      <nav>
        <ul
          className={`${stylesNumbers.numbers_container} ${fontstylesNumbers.light_italic}`}
        >
          <li>
            <a href="#" onClick={handleClick} className={stylesNumbers.number}>
              10
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick} className={stylesNumbers.number}>
              20
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick} className={stylesNumbers.number}>
              50
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick} className={stylesNumbers.number}>
              100
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClick} className={stylesNumbers.number}>
              all
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AmountOnPage;
