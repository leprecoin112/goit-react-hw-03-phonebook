import PropTypes from 'prop-types';
import styles from './Input.module.scss';
function Input({
  value,
  onChange,
  labelText,
  type = 'text',
  name,
  pattern,
  title,
  required = 'required',
}) {
  return (
    <label className={styles.label}>
      {labelText}
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
      ></input>
    </label>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  labelText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'tel']),
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  require: PropTypes.string,
};

export default Input;
