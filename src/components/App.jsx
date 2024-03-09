import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { useSelector } from 'react-redux';
import { getContacts } from '../store/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Notification message="No contacts added" />
      )}
      <ContactList />
    </>
  );
};
