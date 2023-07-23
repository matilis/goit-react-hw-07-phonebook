import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      e.target.reset();
      return alert(`${contact.name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.form__label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[A-Za-z.'\- ]+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.form__input}
            placeholder="Contact name"
          />
        </label>

        <label className={css.form__label}>
          Number
          <input
            type="tel"
            name="phone"
            pattern="^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Contact number"
            className={css.form__input}
          />
        </label>

        <button type="submit" className={css.form__button}>
          Add contact
        </button>
      </form>
    </div>
  );
};
