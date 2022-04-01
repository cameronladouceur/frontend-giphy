import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

test("renders title", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole("heading", { name: "GifMaster" });
  expect(headingElement).toBeInTheDocument();
});

test("renders link to favorites", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkToFavs = screen.getByRole("link", { name: "Favorites" });
  expect(linkToFavs).toBeInTheDocument;
});
