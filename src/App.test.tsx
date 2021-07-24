import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default question mark", () => {
  render(<App />);
  const linkElement = screen.getByText(/\< Type \>/i);
  expect(linkElement).toBeInTheDocument();
});
