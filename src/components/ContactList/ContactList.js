import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  console.log(
    '🚀 ~ file: ContactList.js ~ line 7 ~ ContactList ~ contacts',
    contacts
  );

  const filter = useSelector(selectFilter);
  // console.log(
  //   '🚀 ~ file: ContactList.js ~ line 13 ~ ContactList ~ filter',
  //   filter
  // );

  return (
    <ul>
      {contacts
        .filter(contact => {
          console.log(
            '🚀 ~ file: ContactList.js ~ line 26 ~ ContactList ~ filter',
            filter
          );
          return filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true;
        })
        .map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} name={name} number={number} id={id} />
          );
        })}
    </ul>
  );
}
