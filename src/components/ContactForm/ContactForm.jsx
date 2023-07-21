import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact(name, number));

    form.reset();
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
            name="number"
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
