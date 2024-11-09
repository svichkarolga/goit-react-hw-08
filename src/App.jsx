import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect, lazy } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { selectLoading, selectError } from "./redux/contacts/selectors";
import Layout from "./components/Layout/Layout";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { refreshUser } from "./redux/auth/operations";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader isLoading={isLoading} />
  ) : (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
