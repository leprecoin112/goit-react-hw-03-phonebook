import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ type = 'submit', title, onClick }) {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {title}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  title: PropTypes.string,
};

export default Button;
