import PropTypes from "prop-types";

export default function ToggleSwitch({ setting1, setting2 }) {
  return (
    <label
      htmlFor="switch"
      className="switch relative flex cursor-pointer items-center"
    >
      <span className="mr-1 text-sm" data-testid="home-toggle">
        {setting1}
      </span>
      <input type="checkbox" id="switch" className="sr-only" defaultChecked />
      <span className="h-6 w-12 rounded-full bg-gray-800" />
      <span className="ml-1 text-sm" data-testid="away-toggle">
        {setting2}
      </span>
    </label>
  );
}

ToggleSwitch.propTypes = {
  setting1: PropTypes.string.isRequired,
  setting2: PropTypes.string.isRequired,
};
