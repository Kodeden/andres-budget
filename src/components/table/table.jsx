import PropTypes from "prop-types";
import TRow from "./t-row";
import THead from "./t-head";

export default function Table({ budget }) {
  return (
    <table className="container mx-auto border-separate border-spacing-y-2">
      <THead />
      <tbody>
        {budget.map((item) => (
          <TRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  budget: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
