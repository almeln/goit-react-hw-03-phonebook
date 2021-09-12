import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <p>
        <span className={css.contactItemName}>{name}:</span>
        <span className={css.contactItemNumber}>{number}</span>
        <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
