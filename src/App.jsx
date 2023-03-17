import { useEffect, useState } from "react";
import Table from "./components/table/table";
import Layout from "./layout";

function App() {
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/budget")
      .then((response) => response.json())
      .then((budgetData) => {
        setBudget(budgetData);
      });
  }, []);

  return (
    <Layout>{budget ? <Table budget={budget} /> : <p>Loading...⌛</p>}</Layout>
  );
}

export default App;
