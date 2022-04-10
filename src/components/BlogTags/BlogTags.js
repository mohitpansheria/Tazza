import React from "react";
import styles from "./BlogTags.module.scss";
const BlogTags = () => {
  return (
    <>
      <div className={`${styles["product-tag"]} border border-1`}>
        <div className={` ${styles["tag-title"]} border-bottom`}>
          <h4>Popular Tags</h4>
        </div>
        <div className={styles["product-tag-button"]}>
          <ul className="mt-3">
            <li className={styles["tag-list"]}>Agency</li>
            <li className={styles["tag-list"]}>Business</li>
            <li className={styles["tag-list"]}>Organic Food</li>
            <li className={styles["tag-list"]}>Farmer</li>
            <li className={styles["tag-list"]}>Marketing</li>
            <li className={styles["tag-list"]}>Company</li>
            <li className={styles["tag-list"]}>Food</li>
            <li className={styles["tag-list"]}>Services</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogTags;
