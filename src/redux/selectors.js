import { createSelector } from '@reduxjs/toolkit';

//ten drugi contacts =>state.contacts.contacts; on wpada do  initialState w contactsSlice.
//jezeli zmienie tu nazwe to tam tez musze np. =>state.contacts.items;

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectStatusFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectStatusFilter],
  (contacts, statusFilter) => {
    if (statusFilter === '') {
      return contacts;
    } else {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(statusFilter.filter) ?? []
      );
    }
  }
);
