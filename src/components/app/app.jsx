import React from "react";
import Header from "../header/header";
import Sort from "../sort/sort";
import Filters from "../filters/filters";
import styles from "./app.module.css";
import TableBody from "../table-body/table-body";
import fontStyles from "../../fonts/fonts.module.css";

function App() {
  return (
    <body className={styles.page}>
      <Header />
      <main className={styles.main}>
        <ul className={styles.table_header}>
          <Filters />
          <Sort />
        </ul>
        <div className={styles.choose_container}>
          <label className={`${styles.choose_header} ${fontStyles.light_italic}`} for="choose">-choose</label>
          <input type="checkbox" name="" id="" value="choose" />
        </div>
        <TableBody />
      </main>
    </body>
  );
}

export default App;
