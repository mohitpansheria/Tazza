import React from "react";
import styles from "./BlogRecentPost.module.scss";

const BlogRecentPost = () => {
  return (
    <>
      <div className={`${styles["recent-post-sidebar"]} border border-1`}>
        <div className={`${styles["post-sidebar-title"]} border-bottom`}>
          <h4>Recent Post</h4>
        </div>
        <ul className="mt-3">
          <li className="pt-3  border-bottom">
            <span className={styles["post-date"]}>20 April, 2020</span>
            <h4>
              <a className={styles["post-title"]} href="/#">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>
          <li className="pt-3  border-bottom">
            <span className={styles["post-date"]}>20 April, 2020</span>
            <h4>
              <a className={styles["post-title"]} href="/#">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>
          <li className="pt-3  border-bottom">
            <span className={styles["post-date"]}>20 April, 2020</span>
            <h4>
              <a className={styles["post-title"]} href="/#">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>
          <li className="pt-3  border-bottom">
            <span className={styles["post-date"]}>20 April, 2020</span>
            <h4>
              <a className={styles["post-title"]} href="/#">
                Strawberries are low-growing herbaceous plants.
              </a>
            </h4>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogRecentPost;
