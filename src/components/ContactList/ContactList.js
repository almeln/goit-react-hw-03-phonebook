import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  // {
  //   return (
  //     <ul>
  //       {contacts.map(contact => (
  //         <ContactItem
  //           key={contact.id}
  //           id={contact.id}
  //           name={contact.name}
  //           number={contact.number}
  //           onDeleteContact={onDeleteContact}
  //         ></ContactItem>
  //       ))}
  //     </ul>
  //   );
  // };
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactItem}>
        <ContactItem
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
