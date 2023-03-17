import PropTypes from "prop-types";

export default function InputField({ id, label, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>Amount</label>
      <input
        type={type}
        id={id}
        className="rounded border border-gray-400 p-2"
      />
    </div>
  );
}

InputField.defaultProps = {
  type: "text",
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};
