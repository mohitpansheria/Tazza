import React from 'react';
import Icofont from 'react-icofont';
import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${styles.custom__btn} ${
        props.round ? 'rounded' : ''
      }`}
      onClick={props.onClick}
    >
      {props.position === 'left' && (
        <Icofont icon={props.iconName} className={styles.iconLeft} />
      )}
      {props.children}
      {props.position === 'right' && (
        <Icofont icon={props.iconName} className={styles.iconRight} />
      )}
    </button>
  );
};

export default Button;
