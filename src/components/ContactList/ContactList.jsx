import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/filters/selectors";

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const handleEditContact = (contactId, updatedData) => {
    dispatch(updateContact(contactId, updatedData)); // PATCH-запит на сервер
  };

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {visibleContacts.map((contact) => (
          <li className={styles.item} key={contact.id}>
            <Contact
              data={contact}
              onDelete={() => handleDeleteContact(contact.id)}
              onEdit={handleEditContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
