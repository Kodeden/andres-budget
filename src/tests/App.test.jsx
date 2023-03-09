import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect } from "vitest";

it("shows 10 budget items (plus one header row)", async () => {
  render(<App />);

  const budgetItems = await screen.findAllByRole("row");

  expect(budgetItems).toHaveLength(11);
});
