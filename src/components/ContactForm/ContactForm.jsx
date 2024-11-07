import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./ContactForm.module.css";
import { profileSchemas } from "../../utils/schemas.js";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    toast.success("Successfully added!");
    actions.resetForm();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={profileSchemas}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div className={styles.row}>
            <label className={styles.text} htmlFor="name">
              Name:
            </label>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="span"
            />
          </div>
          <div className={styles.row}>
            <label className={styles.text} htmlFor="number">
              Number:
            </label>
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="span"
            />
          </div>
          <div className={styles.btnBox}>
            <button className={styles.btn} type="submit">
              Add contact
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
