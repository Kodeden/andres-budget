import { formatDateTime } from "../utils";

test("formatDateTime", () => {
  expect(formatDateTime("2018-01-01")).toBe("Jan 1, 2018");
});
