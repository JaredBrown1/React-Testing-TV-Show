import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders Episode Component", () => {
  const episodes = [{ name: "episode 1" }];
  render(<Episodes episodes={episodes} />);
});

test("renders episode data from api when episodes are passed through", () => {
  const data = [
    {
      image: { medium: "Chapter One" },
      summary: "Chapter One",
      runtime: "Chapter One",
      number: "Chapter One",
      name: "Chapter One",
      season: "Chapter One 1",
    },
  ];
  const { queryAllByText, rerender } = render(<Episodes episodes={[]} />);

  expect(queryAllByText(/chapter/i)).toHaveLength(0);

  rerender(<Episodes episodes={data} />);

  expect(queryAllByText(/chapter/i)).toHaveLength(4);
});
