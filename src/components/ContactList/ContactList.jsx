import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filteredContacts) => {
  if (filteredContacts === '') {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts.filter)
    );
  }
};

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(state => state.filters);
  const visibleContacts = getVisibleContacts(contacts, filteredContacts);

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contacts}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contacts__item}>
          <p className={css.contacts__name}>{contact.name}</p>
          <p className={css.contacts__number}>{contact.number}</p>
          <button
            type="button"
            value={contact.id}
            onClick={() => handleDelete(contact.id)}
            className={css.contacts__button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
