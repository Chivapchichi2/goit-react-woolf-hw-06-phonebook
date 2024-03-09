import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push({ ...payload, id: nanoid() });
      },
    },

    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const persistedContactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
