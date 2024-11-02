import { Helmet } from "react-helmet-async";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function DocumentTitle({ children }) {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
}
