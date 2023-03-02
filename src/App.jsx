import { useEffect, useState } from "react";

function App() {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/budget")
      .then((response) => response.json())
      .then((budgetData) => {
        setBudget(budgetData);
      });
  }, []);

  // If 'budget' is truthy, then render the first element of the array
  // SHORT-CIRCUIT EVALUATION
  return budget && <p>{budget[0].amount}</p>;
}

export default App;
