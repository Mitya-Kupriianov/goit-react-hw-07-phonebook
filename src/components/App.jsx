import { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter name="filter" />
          <ContactList />
        </>
      ) : (
        <h2>There are no contacts</h2>
      )}
    </div>
  );
}
console.log(
  '🚀 ~ file: App.jsx ~ line 42 ~ App ~ fetchContacts',
  fetchContacts
);
console.log(
  '🚀 ~ file: App.jsx ~ line 42 ~ App ~ fetchContacts',
  fetchContacts
);
