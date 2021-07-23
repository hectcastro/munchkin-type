import { render, screen } from "@testing-library/react";
import App from "./App";

test.skip("renders default question mark", () => {
  render(<App />);
  const linkElement = screen.getByText(/\?/i);
  expect(linkElement).toBeInTheDocument();
});
