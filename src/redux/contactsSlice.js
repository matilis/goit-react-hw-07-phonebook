import { nanoid } from 'nanoid';
const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState =
  JSON.parse(localStorage.getItem('PHONEBOOK')) || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const contactNames = state.map(contact => contact.name);
        if (contactNames.includes(action.payload.name))
          return alert(`${action.payload.name} is alredy in contacts`);

        state.push(action.payload);
        localStorage.setItem('PHONEBOOK', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('PHONEBOOK', JSON.stringify(state));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
