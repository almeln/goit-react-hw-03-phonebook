import React from 'react';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete }) => (
  // {
  //   return (
  //     <li className={css.contactItem}>
  //       <p>
  //         <span className={css.contactItemName}>{name}:</span>
  //         <span className={css.contactItemNumber}>{number}</span>
  //         <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>
  //           Delete
  //         </button>
  //       </p>
  //     </li>
  //   );
  // };
  <>
    <p>
      <span className={css.contactItemName}>{name}:</span>
      <span className={css.contactItemNumber}>{number}</span>
      <button type="button" className={css.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </p>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
