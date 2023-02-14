import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.scss';
import Button from 'shared/components/Button/Button';

function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contact} key={id}>
          <span className={styles.circle}></span>
          <p>
            {name} {number}
          </p>
          <Button
            type="button"
            title="Delete"
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default Contacts;
