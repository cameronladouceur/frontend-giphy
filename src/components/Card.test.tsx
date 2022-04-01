import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Gif from "../models/Gif";
import Card from "./Card";

const dummyGif: Gif = {
  id: "abc",
  title: "test-title",
  username: "asdf",
  import_datetime: "123",
  url: "www.google.com",
  images: {
    original: {
      url: "test url",
    },
  },
};

test("renders prop title", () => {
  render(
    <BrowserRouter>
      <Card singleGif={dummyGif} />
    </BrowserRouter>
  );
  const titleEl = screen.getByText("test-title");
  expect(titleEl).toBeInTheDocument();
});
