import React from "react";
import Icofont from "react-icofont";
import styles from "./BlogCategory.module.scss";
const BlogCategory = () => {
  return (
    <>
      <div className={`${styles["post-category"]} border border-1`}>
        <div className={styles["post-category-title"]}>
          <h4>Post Category</h4>
        </div>
        <ul className="list-group">
          <li
            className={`list-group-item list-icon mt-2 position-relative border border-2 ${styles.list}`}
          >
            <a href="/#" className={styles["list-name"]}>
              <Icofont
                className={styles["sidebar-li-icon"]}
                icon="arrow-right"
              />
              Feature Products
            </a>
          </li>
          <li
            className={`list-group-item list-icon mt-2 position-relative border border-2 ${styles.list}`}
          >
            <a href="/#" className={styles["list-name"]}>
              <Icofont
                className={styles["sidebar-li-icon"]}
                icon="arrow-right"
              />
              Organic Juices
            </a>
          </li>
          <li
            className={`list-group-item list-icon mt-2 position-relative border border-2 ${styles.list}`}
          >
            <a href="/#" className={styles["list-name"]}>
              <Icofont
                className={styles["sidebar-li-icon"]}
                icon="arrow-right"
              />
              Dried Products
            </a>
          </li>
          <li
            className={`list-group-item list-icon mt-2 position-relative border border-2 ${styles.list}`}
          >
            <a href="/#" className={styles["list-name"]}>
              <Icofont
                className={styles["sidebar-li-icon"]}
                icon="arrow-right"
              />
              Fruits Fresh
            </a>
          </li>
          <li
            className={`list-group-item list-icon mt-2 position-relative border border-2 ${styles.list}`}
          >
            <a href="/#" className={styles["list-name"]}>
              <Icofont
                className={styles["sidebar-li-icon"]}
                icon="arrow-right"
              />
              Fresh Meal
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogCategory;
