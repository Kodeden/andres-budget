import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <h1 className="my-4 text-center text-2xl">The Budget App 💸</h1>
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
