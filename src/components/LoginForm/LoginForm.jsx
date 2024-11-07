import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully login!");
        console.log("login success");
      })
      .catch(() => {
        toast.error("Error in login. Please try again.");
        console.log("login error");
      });
    actions.resetForm();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="off">
          <label className={styles.label}>Email</label>
          <Field className={styles.input} type="email" name="email" />
          <ErrorMessage
            className={styles.error}
            name="email"
            component="span"
          />

          <label className={styles.label}> Password</label>
          <Field className={styles.input} type="password" name="password" />
          <ErrorMessage
            className={styles.error}
            name="password"
            component="span"
          />

          <div className={styles.btnBox}>
            <button className={styles.btn} type="submit">
              Log In
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
