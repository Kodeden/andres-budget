import PropTypes from "prop-types";
import { formatDateTime } from "@/utils";

export default function TRow({ item }) {
  return (
    <tr className="spacing-x-4">
      <td>{formatDateTime(item.date)}</td>
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
