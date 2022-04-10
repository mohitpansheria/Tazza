import React from "react";
import Icofont from "react-icofont";
import styles from "./SearchBar.module.scss";
const SearchBar = () => {
  return (
    <>
      <div className={styles["search-btn"]}>
        <form action="">
          <div className={`${styles["search-area"]} position-relative`}>
            <input
              type="text"
              className={`form-control pe-5 ${styles["search-button"]}`}
              // value
              placeholder="Search Here"
              id="search-button"
              name="search-button"
            />
            <Icofont
              icon="search"
              className={`${styles["search-icon"]} position-absolute`}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
