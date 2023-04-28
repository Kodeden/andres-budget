export const loadBudget = () => {
  return fetch("http://localhost:3001/budget").then((response) =>
    response.json()
  );
};
