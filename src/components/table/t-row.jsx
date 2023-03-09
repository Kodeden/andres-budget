import PropTypes from "prop-types";

export default function TRow({ item }) {
  return (
    <tr>
      <td>{item.date}</td>
      <td>{item.amount}</td>
      <td>{item.description}</td>
    </tr>
  );
}

TRow.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
