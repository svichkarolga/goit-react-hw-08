import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage className={styles.error} name="name" component="span" />

        <label className={styles.label}>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage className={styles.error} name="email" component="span" />

        <label className={styles.label}>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage
          className={styles.error}
          name="password"
          component="span"
        />

        <div className={styles.btnBox}>
          <button className={styles.btn} type="submit">
            Register
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
