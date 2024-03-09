import { Contact } from './Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../store/selectors';
import { Notification } from '../Notification/Notification';
import { useRef } from 'react';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const filterInLowerCase = filter.toLowerCase();
    return contacts
      .filter(contact => contact.name.toLowerCase().includes(filterInLowerCase))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const filteredContacts = getFilteredContacts();
  let letter = useRef('');
  const shouldWriteLetter = name => {
    if (name.charAt(0).toUpperCase() !== letter) {
      letter = name.charAt(0).toUpperCase();
      return true;
    }
    return false;
  };
  return contacts.length > 0 && filteredContacts.length === 0 ? (
    <Notification message="No contact found" />
  ) : (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <div key={id}>
          {shouldWriteLetter(name) && (
            <p key={letter} className={styles.letter}>
              {letter}
            </p>
          )}
          <Contact id={id} name={name} number={number} />
        </div>
      ))}
    </ul>
  );
};
