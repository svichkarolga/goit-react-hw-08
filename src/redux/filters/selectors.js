import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/slice";
import { selectContacts } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
