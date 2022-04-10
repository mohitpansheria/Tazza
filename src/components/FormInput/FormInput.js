import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = (props) => {
  return (
    <>
      <input
        {...props}
        className={`form-control rounded  ${styles["input-type"]}`}
      />
    </>
  );
};

export default FormInput;
