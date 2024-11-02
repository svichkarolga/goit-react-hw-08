import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import styles from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <form className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={styles.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={styles.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </Formik>
  );
};

export default RegistrationForm;
