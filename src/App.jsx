import { useEffect, useState } from "react";
import Table from "./components/table/table";

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
  return budget && <Table budget={budget} />;
}

export default App;
