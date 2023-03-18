import PropTypes from "prop-types";
import { formatDateTime } from "@/utils";

export default function TRow({ item }) {
  return (
    <tr className="my-4 h-10 py-4 text-center odd:bg-white odd:text-gray-900 [&:last-child>*]:h-12 [&:last-child>*]:border-b [&:last-child>*]:pb-2">
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
