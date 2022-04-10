import React from "react";
import styles from "./TeaxtArea.module.scss";
const TeaxtArea = (props) => {
  return (
    <>
      <textarea
        {...props}
        className={`form-control rounded  ${styles["textArea-type"]}`}
      ></textarea>
    </>
  );
};

export default TeaxtArea;
