import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contacts__item}>
          <p className={css.contacts__name}>{contact.name}</p>
          <p className={css.contacts__number}>{contact.phone}</p>
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
