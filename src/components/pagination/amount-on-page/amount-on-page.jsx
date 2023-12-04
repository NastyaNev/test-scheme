import React from "react";
import fontstylesNumbers from "../../../fonts/fonts.module.css";
import stylesNumbers from "../numbers-styles.module.css";

function AmountOnPage({ setPostsPerPage, postsPerPage }) {
  const amauntOnPage = [10, 20, 50, 100, -1];

  const handleClick = (amount) => {
    setPostsPerPage(
      amount
    );
  };

  const activeStyle = (amount) => {
    if (amount === postsPerPage) {
      return `${stylesNumbers.number} ${stylesNumbers.number_active}`;
    } else {
      return stylesNumbers.number;
    }
  };

  return (
    <div
      className={`${stylesNumbers.numbers_section_container} ${fontstylesNumbers.light_italic}`}
    >
      <span className={stylesNumbers.span}>on page:</span>
      <nav>
        <ul
          className={`${stylesNumbers.numbers_container} ${fontstylesNumbers.light_italic}`}
        >
          {amauntOnPage.map((amount) => (
            <li key={amount}>
              <a onClick={() => handleClick(amount)} href="#" className={activeStyle(amount)}>
                {amount === -1 ? 'all' : amount}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default AmountOnPage;
