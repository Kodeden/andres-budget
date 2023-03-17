export function formatDateTime(date) {
  const d = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return d.toLocaleDateString("en-US", options);
}
