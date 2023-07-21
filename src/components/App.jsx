import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && !error && <p>Request in progress</p>}
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter /> */}
      {/* <ContactList /> */}
    </div>
  );
};
