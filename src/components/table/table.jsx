import { useLoaderData } from "react-router-dom";
import THead from "./t-head";
import TRow from "./t-row";

export default function Table() {
  const budget = useLoaderData();

  return (
    <table className="container mx-auto border-separate border-spacing-y-2">
      <THead />
      <tbody>
        {budget.map((item) => (
          <TRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
