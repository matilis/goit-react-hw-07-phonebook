import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filtersSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputChange = event =>
    dispatch(filterContact(event.target.value));

  return (
    <div className={css.filter}>
      <h3>Find contact by name</h3>
      <input
        className={css.filter__input}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </div>
  );
};
