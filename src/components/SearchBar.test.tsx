import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

test("searchBar updates state on form input", () => {
  // arrange
  render(
    <BrowserRouter>
      <SearchBar />
    </BrowserRouter>
  );

  // acting
  const inputEl = screen.getByRole("textbox");
  fireEvent.change(inputEl, { target: { value: "Cameron" } });

  // asserting
  const testEl = screen.getByText("Cameron");
  expect(testEl).toBeInTheDocument();
});
