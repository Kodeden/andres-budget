import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <h1>The Budget App 💸</h1>
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
