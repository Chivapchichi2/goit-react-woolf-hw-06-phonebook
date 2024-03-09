import { persistedContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducer = {
  contacts: persistedContactsReducer,
  filter: filterReducer,
};
