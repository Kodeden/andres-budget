export function formatDateTime(date) {
  const d = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC", // Set the time zone to UTC to avoid daylight savings time
  };

  return d.toLocaleDateString("en-US", options);
}
