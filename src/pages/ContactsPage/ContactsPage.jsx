import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <DocumentTitle>Your phonebook</DocumentTitle>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader isLoading={isLoading} />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
