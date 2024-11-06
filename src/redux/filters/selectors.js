import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/slice";
import { selectContacts } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        (contact.number && contact.number.toString().includes(normalizedFilter)) // Перевірка за телефоном
    );
    console.log("filter:", normalizedFilter, "contact:", contact.phone);
  }
);
