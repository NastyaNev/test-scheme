import React from "react";
import fontstylesNumbers from "../../../fonts/fonts.module.css";
import stylesNumbers from "../numbers-styles.module.css";

function AmountOnPage({
  setPostsPerPage,
  posts,
  postsPerPage,
}) {
  const handleClick = (e) => {
    setPostsPerPage(
      e.target.textContent === "all" ? posts.length : e.target.textContent
    );
  };

  const activeStyle = (amaunt) => {
    if (amaunt === "all" && postsPerPage === posts.length) {
      return `${stylesNumbers.number} ${stylesNumbers.number_active}`;
    } else if (amaunt === postsPerPage) {
      return `${stylesNumbers.number} ${stylesNumbers.number_active}`;
    } else {
      return stylesNumbers.number;
    }
  };

  const amauntOnPage = ["10", "20", "50", "100", "all"];

  return (
    <div
      className={`${stylesNumbers.numbers_section_container} ${fontstylesNumbers.light_italic}`}
    >
      <span className={stylesNumbers.span}>on page:</span>
      <nav>
        <ul
          className={`${stylesNumbers.numbers_container} ${fontstylesNumbers.light_italic}`}
        >
          {amauntOnPage.map((amaunt) => (
            <li key={amaunt}>
              <a onClick={handleClick} href="#" className={activeStyle(amaunt)}>
                {amaunt}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default AmountOnPage;
